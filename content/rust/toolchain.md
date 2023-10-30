+++
title="Toolchain (Nightly)"
+++

# Per command override (shorthand)

Source: <https://rust-lang.github.io/rustup/overrides.html#toolchain-override-shorthand>

If the first argument to cargo, rustc or other tools in the toolchain begins with +, it will be interpreted as a rustup toolchain name

Example:
```sh
rustfmt +nightly src/lib.rs
```


# Override to set nightly for a specific folder

Source: <https://rust-lang.github.io/rustup/overrides.html#directory-overrides>

Set Nightly

```sh
rustup override set nightly
```

Unset override

```sh
rustup override unset
```

Show version in use

```sh
rustup show
```