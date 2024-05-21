+++
title = "Crate Insta"
date = 2024-02-02
updated = 2024-05-21
+++

Source: <https://insta.rs/docs/quickstart/>

# Asserting in a loop

If you are using the assert in a loop you'll want to use `cargo insta test` instead of cargo test to get all snapshots created at the same time.

# Using [rstest](https://docs.rs/rstest/latest/rstest/) or [test_case](https://docs.rs/test-case/latest/test_case/)

Because these crates use macros to create separate test cases the execution order is not deterministic.
So ensure you set a snapshot name based on something that determines the output for example a string version of the input.
If you'd like the name to be based on the inputs see the [macro](https://insta.rs/docs/patterns/#rstest) in insta's docs.

# Cleanup of unreferenced snapshots

If files are renamed or tests are renamed then snapshots can become no longer used.
To delete the stale ones you can use the following command.
More info can be found [here](https://insta.rs/docs/cli/#test).

```sh
cargo insta test --unreferenced delete
```

# Testing private functions (and managing snap files)

There are three ways to decide where to store snapshots.

1. [Inline with the code](https://insta.rs/docs/quickstart/#inline-snapshots)
   - If you call the insta assert functions only once then inline is a available option to consider.
2. In a folder called snapshots in a folder next to the file with your test.
   - This is the default if you don't use inline.
3. Set a desired folder [using settings](https://docs.rs/insta/latest/insta/struct.Settings.html#method.snapshot_path).
   - This is my preferred option if the assert must be called multiple times. See example below for how to use this option. Note that there are other ways to change the setting but I just chose this one as I intended to make use of the setting for multiple tests.

```rust
pub(crate) fn insta_settings() -> insta::Settings {
    let mut result = insta::Settings::clone_current();
    let cwd = std::env::current_dir().expect("failed to get cwd");
    let path = cwd.join("tests").join("snapshots");
    result.set_snapshot_path(path);
    result
}

fn test_output() {
    let actual = "bob"
    insta_settings().bind(|| insta::assert_snapshot!(actual));
}
```

# Supporting Tooling

For the best experience you'll have to have [cargo-insta](https://insta.rs/docs/cli/) installed.
You can install it with `cargo install cargo-insta`

If you use vscode you'll also want to make use of the plugin for instal (see plugin page for more details).
See info for plugin below (from copy command in vscode).
To activate many of the options for the plugin you need to click on the snap file **in the tree view**.

> Name: insta snapshots\
> Id: mitsuhiko.insta\
> Description: Syntax support for insta snapshots\
> Version: 1.0.6\
> Publisher: Armin Ronacher\
> VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=mitsuhiko.insta>

# Setting terminal size

Some test like those of the output of a program might be sensitive to the terminal size and in particular the width.
Below is an example script to set the terminal width using crossterm.
Tested on Ubuntu 22.04.1 in the default terminal and it works.
It doesn't work if the terminal is maximized.
Also doesn't work in the vscode terminal.

NB: If unfamiliar with cargo scripts more info can be found [here](@/rust/scripts.md)

````rust
#!/usr/bin/env -S cargo +nightly -Zscript
```
[package]
edition = "2021"

[dependencies]
crossterm = "0.27.0"
```

fn main() {
    set_terminal_width(100);
}

/// Designed for use in testing and will panic if unable to set size in under 2 seconds
fn set_terminal_width(desired_width: u16) {
    const MAX_WAIT_TIME_SEC: u64 = 2;
    let (mut curr_width, mut curr_height) = crossterm::terminal::size().unwrap();
    println!("Current terminal size is {curr_width} x {curr_height}");
    if curr_width == desired_width {
        // Nothing required to be done
        println!("Already at desired width of {desired_width}");
        return;
    }

    let start_instant = std::time::Instant::now();
    crossterm::execute!(
        std::io::stdout(),
        crossterm::terminal::SetSize(desired_width, curr_height)
    )
    .unwrap();
    while curr_width != desired_width {
        if std::time::Instant::now()
            .duration_since(start_instant)
            .as_secs()
            > MAX_WAIT_TIME_SEC
        {
            panic!("failed to change terminal size to width of {desired_width} in under {MAX_WAIT_TIME_SEC} seconds");
        }
        std::thread::sleep(std::time::Duration::from_millis(1));
        (curr_width, curr_height) = crossterm::terminal::size().unwrap();
    }

    println!(
        "Successfully changed terminal size to {curr_width} x {curr_height} in {} mills",
        std::time::Instant::now()
            .duration_since(start_instant)
            .as_millis()
    );
}
````
