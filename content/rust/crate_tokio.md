+++
title="Crate Tokio"
date=2023-08-21
updated = 2024-01-30
aliases=["/rust/tokio"]
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
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

Note: It's important that you use block_on as if there isn't something that is being awaiting the runtime stops.
Can't remember the source but I forgot to block on at least one thing and then I couldn't spawn anything and have it run (wasted a lot of time).

```rust
fn main() {
    let rt = tokio::runtime::Runtime::new().unwrap();
    rt.block_on(do_thing());
}
async fn do_thing() {
    println!("Yep I ran");
}
```
