+++
title = "OnceLock"
date = 2023-12-13
+++

Example on how to use [OnceLock](https://doc.rust-lang.org/std/sync/struct.OnceLock.html).

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
