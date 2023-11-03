+++
title="Documentation"
date=2023-11-02
+++

# Include Readme.md in rustdoc

Instead of repeating what is in `README.md` in the rust doc.
Use this at the top of `lib.rs`.

```rust
#![doc = include_str!("../README.md")]
```

# Document optional features

Source: <https://users.rust-lang.org/t/how-to-document-optional-features-in-api-docs/64577/2>

Add this to the top of `lib.rs`

```rust
#![cfg_attr(docsrs, feature(doc_cfg))]
```
