+++
title='Conditional Compilation'
+++

Source: <https://stackoverflow.com/questions/39204908/how-to-check-release-debug-builds-using-cfg-in-rust>
Source: <https://doc.rust-lang.org/reference/conditional-compilation.html#debug_assertions>

Allows to have different code compile under different circumstances.

# Example

```rust
#[cfg(debug_assertions)]
fn example() {
    println!("Debugging enabled");
}

#[cfg(not(debug_assertions))]
fn example() {
    println!("Debugging disabled");
}

fn main() {
    if cfg!(debug_assertions) {
        println!("Debugging enabled");
    } else {
        println!("Debugging disabled");
    }

    #[cfg(debug_assertions)]
    println!("Debugging enabled");

    #[cfg(not(debug_assertions))]
    println!("Debugging disabled");

    example();
}
```
