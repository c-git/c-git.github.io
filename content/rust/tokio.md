+++
title="Tokio"
date=2023-08-21
+++

# Setup a runtime environment

Source: <https://users.rust-lang.org/t/calling-async-function-from-main/53314>

## Use macro on main

```rust
#[tokio::main]
async fn main() {
    do_thing().await;
}
async fn do_thing() {
    println!("Yep I ran");
}
```

## Manually create a runtime

```rust
fn main() {
    let rt = tokio::runtime::Runtime::new().unwrap();
    rt.block_on(do_thing());
}
async fn do_thing() {
    println!("Yep I ran");
}
```
