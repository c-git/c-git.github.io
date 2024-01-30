+++
title = "Crate Poll Promise"
date = 2024-01-30
+++

Source: <https://github.com/EmbarkStudios/poll-promise>

# Foreword

Useful for applications that need to poll an async task instead of just awaiting it because you cannot block the current execution unit.
As per their readme not recommended for libraries.

See [simple example](https://github.com/EmbarkStudios/poll-promise/blob/main/examples/example.rs) that uses threads and no async runtime.

The examples below use [cargo script](@/rust/scripts.md) so if you're not familiar please see my short article on that first.

# Example of how to use with Tokio

Put it here instead of in their examples folder because it would have prevented `cargo test` from passing because it needs non-default features.

````rust
#!/usr/bin/env -S cargo +nightly -Zscript
```cargo
package.edition = "2021"
[dependencies]
poll-promise = { version = "0.3.0", features = ["tokio"] }
tokio = "1.35.1"
```

async fn slow_operation() -> String {
std::thread::sleep(std::time::Duration::from_secs(2));
"Hello from other thread!".to_owned()
}

#[tokio::main]
async fn main() {
let promise = poll_promise::Promise::spawn_async(async move { slow_operation().await });

    eprint!("Waiting");

    // This loop would normally be a game loop, or the executor of an immediate mode GUI.
    loop {
        // Poll the promise:
        if let Some(result) = promise.ready() {
            eprintln!("\nDONE: {:?}", result);
            break;
        } else {
            eprint!("."); // show that we are waiting
        }

        // Do other stuff, e.g. game logic or painting a UI
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

}
````
