+++
title="Single file script"
date=2023-09-02
updated = 2025-04-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

Source: <https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#script>

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

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
clap = { version = "4.2", features = ["derive"] }
---

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
```
