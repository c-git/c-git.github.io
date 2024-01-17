+++
title="Cargo"
date=2023-06-16
updated = 2024-01-17
+++

# Configuring Cargo

See the [Cargo Reference](https://doc.rust-lang.org/cargo/reference/config.html#configuration-format)

# Frequently Used Commands and arguments

Source: <https://doc.rust-lang.org/cargo/commands/index.html>

- [doc](https://doc.rust-lang.org/cargo/commands/cargo-doc.html)
  - `--document-private-items`
  - `--no-deps`
  - `--target-dir`
  - `--open`
- [run](https://doc.rust-lang.org/cargo/commands/cargo-run.html)
  - `--release`
  - `--bin name` (Works with multiple binaries see [Additional Binaries](https://doc.rust-lang.org/cargo/reference/cargo-targets.html?highlight=bin#binaries))
- [test](https://doc.rust-lang.org/cargo/commands/cargo-test.html)
  - `-- --ignored` (Works with `#[ignore]`
    see [rust reference](https://doc.rust-lang.org/reference/attributes/testing.html#the-ignore-attribute))
  - `-- --test-threads 1`
- [tree](https://doc.rust-lang.org/cargo/reference/features.html#inspecting-resolved-features)
  - `-e features`
  - `-f "{p} {f}"`
  - `-e features -i foo`

# Cargo Environment Variables

## For Crates

Source: <https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates>

To use environment variables provided by cargo use `env!()`.

Example

```rust
println!("{}", env!("CARGO_PKG_NAME"));
```

- CARGO_PKG_NAME
- CARGO_PKG_VERSION (Prefer use of [Version Crate](https://crates.io/crates/version))

# Specifying dependencies

## Using Git

Source: <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories>

Example

```toml
[dependencies]
regex = { git = "https://github.com/rust-lang/regex.git", branch = "next" }
```

# Adding Feature flag to a library

Source: <https://doc.rust-lang.org/cargo/reference/features.html>

Example of defining a feature

```toml
[features]
default = ["ico", "webp"]
avif = ["dep:ravif", "dep:rgb"]
bmp = []
gif = ["dep:gif"]
png = []
ico = ["bmp", "png"]
# Defines a feature named `webp` that does not enable any other features.
webp = []
```

Optional dependency

```toml
[dependencies]
gif = { version = "0.11.1", optional = true }
ravif = { version = "0.6.3", optional = true }
rgb = { version = "0.8.25", optional = true }
```

Example of conditionally compiling based on feature

```rust
// This conditionally includes a module which implements WEBP support.
#[cfg(feature = "webp")]
pub mod webp;
```

# Mutually Exclusive Feature Flags

Source: <https://doc.rust-lang.org/cargo/reference/features.html#mutually-exclusive-features>

**TLDR**: Avoid using mutually exclusive features see source above for options to work around it otherwise detect it at compile time and provide an error message instead of waiting for duplicated functions to stop the compile.

```rust
#[cfg(all(feature = "foo", feature = "bar"))]
compile_error!("feature \"foo\" and feature \"bar\" cannot be enabled at the same time");
```
