+++
title="WASM"
date=2023-10-19
updated = 2024-06-12
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

# Working on WASM code

Note: One thing to note is that not everything that compiles for WASM works on all WASM targets.
I no longer remember examples of what things don't work but I know that things that were able to compile were not able to run in the browser as they were not supported.
And not everything can compile to WASM for example the blocking API of [reqwest](https://docs.rs/reqwest/latest/reqwest/) doesn't compile to WASM (With good reason, you can't block the only thread you have).

If you are using [conditional compilation](@/rust/conditional_compilation.md) (eg. `#[cfg(target_arch = "wasm32")]`) to target both wasm and native,
then by default rust analyzer will only work on the code it is currently set to compile.
In vscode that can look like some code is "disabled" (a dim color compared to other code).
It doesn't show up errors nor have code completion.
This is both good and bad.
It's good in that you only get code completion for the target you are working on at the moment.
It's bad because you might want to work on the WASM code sometimes.
Those times it's desirable to switch it target WASM instead and highlight that code instead and give suitable completions for that code.

## Switch cargo to target WASM

Source: <https://doc.rust-lang.org/cargo/reference/config.html#configuration-format>

The easiest way and what I'd recommend for most cases is to switch all of cargo to target WASM (and comment it out to switch back).

To do that go to `.cargo/config.toml` and set `target` key in the `build` table to value `wasm32-unknown-unknown`.

```toml
# .cargo/config.toml
[build]
target = "wasm32-unknown-unknown"
```

This will switch all of cargo (and rust-analyzer) to target WASM instead. So for example running `cargo check` will point out errors and warnings for your WASM code.

## Switch the vscode extension to target WASM

Alternatively you can set only the vscode extension for rust-analyzer to target WASM.
To do that edit the json file that stores the vscode settings for the current project to add `"rust-analyzer.cargo.target": "wasm32-unknown-unknown"`.

```json
// .vscode/settings.json
{
    "rust-analyzer.cargo.target": "wasm32-unknown-unknown", //Uncomment to use rust-analyzer on wasm code instead
}
```
