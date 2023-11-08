+++
title="Single file script"
date=2023-09-02
updated = 2023-11-08
+++

Source: <https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#script>

Tim's video on it with an example: <https://www.youtube.com/watch?v=XvFlWPhyz1Y>

Make file executable and then you can just run it.
Cargo will automatically deal with caching for you.

# Without Dependencies

```rust
#!/usr/bin/env -S cargo +nightly -Zscript

fn main() {
    println!("Hello World!");
}
```

# With Dependencies

````rust
#!/usr/bin/env -S cargo +nightly -Zscript

//! ```cargo
//! [dependencies]
//! clap = { version = "4.2", features = ["derive"] }
//! ```

use clap::Parser;

#[derive(Parser, Debug)]
#[clap(version)]
struct Args {
    #[clap(short, long, help = "Path to config")]
    config: Option<std::path::PathBuf>,
}

fn main() {
    let args = Args::parse();
    println!("{:?}", args);
}
````
