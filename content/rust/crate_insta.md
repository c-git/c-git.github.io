+++
title = "Crate Insta"
date = 2024-02-02
+++

Source: <https://insta.rs/docs/quickstart/>

# Testing private functions (and managing snap files)

There are two ways to store snapshots.
[Inline with the code](https://insta.rs/docs/quickstart/#inline-snapshots) or in a snap file next to the file with the test.
If you only call the insta assert functions only once then inline is a fine option to prevent files cluttering up your code directories.
But if you have to call the assert function repeatedly (for example in a loop) then that is not supported by inline.
What you can do though is put your tests into a folder.
So instead of putting them at the bottom of your code you put the test module into a sub folder and then the insta files will also go into that folder.

<!-- TODO add output of tree for example
For example:

```
``` -->

<!-- TODO: Add link to example in cargo leet https://github.com/rust-practice/cargo-leet/ -->
