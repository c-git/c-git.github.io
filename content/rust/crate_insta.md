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
An example of how the subfolder for test option looks can be found [here](https://github.com/fujiapple852/trippy/pull/932/files).
See output of tree command below.

```sh
% tree
.
├── code_snippet
│   ├── snapshots
│   │   ├── cargo_leet__tool__core__helpers__code_snippet__tests__conversion_from_leetcode_response-2.snap
│   │   ├── cargo_leet__tool__core__helpers__code_snippet__tests__conversion_from_leetcode_response-3.snap
│   │   └── cargo_leet__tool__core__helpers__code_snippet__tests__conversion_from_leetcode_response.snap
│   └── tests.rs
├── code_snippet.rs
├── daily_challenge.rs
├── local_store.rs
├── mod.rs
├── problem_code.rs
├── problem_metadata.rs
├── snapshots
└── write_to_disk.rs

3 directories, 11 files
```

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
