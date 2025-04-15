+++
title='Conditional Compilation'
date=2022-11-12
updated = 2025-04-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

Source: <https://stackoverflow.com/questions/39204908/how-to-check-release-debug-builds-using-cfg-in-rust>

Source: <https://doc.rust-lang.org/reference/conditional-compilation.html#debug_assertions>

Source: <https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg_attr-attribute>

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

#[cfg_attr(target_arch = "wasm32", allow(dead_code))]
fn not_used_in_wasm(){
    println!("I'm only used outside of WASM)");
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
    
    #[cfg(not(target_arch = "wasm32"))]
    not_used_in_wasm();

    example();
}
```
