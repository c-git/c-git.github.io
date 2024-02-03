+++
title = "Crate Insta"
date = 2024-02-02
updated = 2024-02-03
+++

Source: <https://insta.rs/docs/quickstart/>

NB: If you are using the assert in a loop you'll want to use `cargo insta test` instead of cargo test to get all snapshots created at the same time.

# Testing private functions (and managing snap files)

There are two ways to store snapshots.
[Inline with the code](https://insta.rs/docs/quickstart/#inline-snapshots) or in a snap file next to the file with the test.
If you only call the insta assert functions only once then inline is a fine option to prevent files cluttering up your code directories.
But if you have to call the assert function repeatedly (for example in a loop) then that is not supported by inline.
What you can do though is put your tests into a folder.
So instead of putting them at the bottom of your code you put the test module into a sub folder and then the insta files will also go into that folder.

# Supporting Tooling

For the best experience you'll have to have [cargo-insta](https://insta.rs/docs/cli/) installed.
You can install it with `cargo install cargo-insta`

If you use vscode you'll also want to make use of the plugin for instal (see plugin page for more details).
See info for plugin below (from copy command in vscode).

> Name: insta snapshots\
> Id: mitsuhiko.insta\
> Description: Syntax support for insta snapshots\
> Version: 1.0.6\
> Publisher: Armin Ronacher\
> VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=mitsuhiko.insta>

<!-- TODO add output of tree for example
For example:

```
``` -->

<!-- TODO: Add link to example in cargo leet https://github.com/rust-practice/cargo-leet/ -->
