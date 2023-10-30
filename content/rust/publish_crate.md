+++
title="Publish Crate"
+++

Source: <https://doc.rust-lang.org/cargo/reference/publishing.html>

These instructions assume that you have signed up on crates.io and are logged in locally in cargo.


- Ensure version has been updated as the same version cannot be published twice
- Test packaging the crate
  ```rust
  cargo package
  ```

  or

  ```rust
  cargo publish --dry-run
  ```
- Then publish
  ```rust
  cargo publish
  ```