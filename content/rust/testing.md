+++
title="Testing"
date=2023-11-05
updated = 2024-01-14
+++

# Frequently used links and commands

Mostly self explanatory except that running test in release mode can increase limits for things like [stack overflow](rust/stack_overflow.md#drop_can_cause_stack_overflow)

```sh
cargo test -- --nocapture
cargo test -- --ignored
cargo test -r
cargo add --dev rstest
cargo add --dev strum -F derive,strum_macros
```

- Readme for [rstest](https://github.com/la10736/rstest) - To see examples of how to use it. (Not extracting the ones I use because each time I go back I find more I want to use).
- docs.rs for [strum](https://docs.rs/strum/latest/strum/all.html) - To see list of things that can be done with enums by this crate

# Shared module for integration tests

Source: <https://doc.rust-lang.org/book/ch11-03-test-organization.html#submodules-in-integration-tests>

Do `tests/common/mod.rs` and not `tests/common.rs`.

<details>
  <summary>Click for details!</summary>

They mainly focus the extra 0 test cases that show in the output, and yes that's annoying but what annoyed me more was the warnings that functions are not used as each file is compiled separately.
So if warnings bother you too then you probably want to ensure you ensure you put it in `mod.rs`.

</details>
