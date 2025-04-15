+++
title="rustfmt"
date=2023-09-02
updated = 2025-04-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

# Run rustfmt using nightly compiler

This might be needed if you want to use nighty only features

## To format specific file

Does the whole file plus any files included in it like the rest of the library in this example

```sh
rustfmt +nightly src/lib.rs
```

## To format all binary and library targets of your crate

```sh
cargo +nightly fmt
```

# Using comment wrapping (comment_width)

Source: <https://rust-lang.github.io/rustfmt/#comment_width>

Needs this setting in the `rustfmt.toml` and must be uncommented to use but must tay commented when using the normal stable compiler as it hasn't been standardized as yet.

```toml
# `wrap_comments` is unstable so to use you need to use nightly.
# Uncomment the line below then run `cargo +nightly fmt`

# wrap_comments = true
```
