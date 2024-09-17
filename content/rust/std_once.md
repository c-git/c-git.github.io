+++
title = "OnceLock"
date = 2023-12-13
updated = 2024-09-17
+++

If thread safety is not needed you can use [OnceCell][oncecell] but [OnceLock][oncelock] can be used in both and hence examples here focus on [OnceLock][oncelock] but the example in the docs for [OnceCell][oncecell] is pretty good.

# Example on how to use OnceLock

The important difference between the examples is where the initialization happens

## Initialized at point of use

Useful if used in same place it is created

```rust
fn main() {
    foo(1); // Prints 1-1
    foo(2); // Prints 1-2
    foo(3); // Prints 1-3
    foo(4); // Prints 1-4
}

fn foo(arg: i32) {
    use std::sync::OnceLock;
    static VALUE: OnceLock<i32> = OnceLock::new();
    let value = VALUE.get_or_init(|| arg);
    println!("{value}-{arg}");
}
```

## Initialized at point of creation

Useful if used in multiple places as it will already be initialized

```rust
use std::sync::{Arc, Mutex, OnceLock};

fn main() {
    foo(); // Prints [0]
    foo(); // Prints [0,1]
    foo(); // Prints [0,1,2]
    foo(); // Prints [0,1,2,3]
}

fn foo() {
    static VALUE: OnceLock<Arc<Mutex<Vec<usize>>>> = OnceLock::new();
    if VALUE.get().is_none() {
        VALUE
            .set(Arc::new(Mutex::new(vec![])))
            .expect("Just checked that it was empty");
    }

    let mut my_vec = VALUE
        .get()
        .expect("Just ensured it was set")
        .lock()
        .expect("Mutex is poisoned");
    let n = my_vec.len();
    my_vec.push(n);

    println!("{my_vec:?}");
}
```

[oncecell]: https://doc.rust-lang.org/std/cell/struct.OnceCell.html
[oncelock]: https://doc.rust-lang.org/std/sync/struct.OnceLock.html
