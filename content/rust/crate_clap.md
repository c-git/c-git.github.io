+++
title = "Crate Clap"
date = 2024-01-30
updated = 2025-04-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

Source: <https://docs.rs/clap/latest/clap/>

# Setup Steps

An example of project where this was used is [zola_chrono](https://github.com/c-git/zola_chrono) but I want to stop including the logging level as part of it and defer to using environment variables as already supported by [env_logger](https://docs.rs/env_logger/latest/env_logger/).

- Add dependency
  ```
  cargo add clap -F derive,cargo,wrap_help
  ```
- Copy [cli.rs](https://github.com/c-git/zola_chrono/blob/main/src/cli.rs) and add and remove as needed
- Copy from [main.rs](https://github.com/c-git/zola_chrono/blob/main/src/main.rs) as needed
- Testing
  ```rust
  #[cfg(test)]
  mod tests {

      #[test]
      fn verify_cli() {
          // Source: https://docs.rs/clap/latest/clap/_derive/_tutorial/index.html#testing
          // My understanding it reports most development errors without additional effort
          use clap::CommandFactory;
          super::Cli::command().debug_assert()
      }
  }
  ```

# Example of cargo subcommand

<https://github.com/rust-practice/cargo-leet/>

# Example of using clap derive

Full details can be found in the [clap docs](https://docs.rs/clap/latest/clap/_derive/).
This is just an short example showing features I use more frequently.

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
version-control-clean-check = { version = "0.1.4", features = ["clap"] }
anyhow = "1.0.94"
clap = { version = "4.5.23", features = ["derive", "wrap_help"] }
---

use clap::{Parser, ValueEnum};
use std::path::PathBuf;
use version_control_clean_check::{check_version_control, CheckOptions};

/// Short about text goes here
///
/// This part is only included in the long about text that shows when using --help
#[derive(Parser, Clone, Eq, PartialEq, Ord, PartialOrd, Debug, Default)]
#[command(author, version, about)]
struct Cli {
    /// Specify the root directory or uses current directory if not provided
    #[arg(value_name = "FOLDER", default_value = ".")]
    root: PathBuf,

    #[clap(flatten)]
    check_version_control: CheckOptions,

    /// A boolean flag that is set to true if the argument is provided
    ///
    /// This line only shows in the long help mode and
    /// if you do not include `long` or `short` (both used below) on the argument
    /// then it becomes positional
    #[arg(long, short)]
    optional_flag: bool,

    /// Included to give an example for an enum
    #[arg(value_enum, long, default_value_t)]
    mode: Animal,
}

#[derive(ValueEnum, Clone, PartialEq, Eq, PartialOrd, Ord, Debug, Default)]
enum Animal {
    Bird,
    #[default]
    Cat,
    Dog,
}

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    dbg!(&cli);
    let path = cli.root.canonicalize()?;
    dbg!(&path);
    check_version_control(path, &cli.check_version_control)?;
    println!("Program Ended");
    Ok(())
}
```

Example output:

```
% ./single_file_script.rs -h
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.04s
     Running `/home/one/.cargo/target/b1/bdd0db958a601c/debug/single_file_script -h`
Short about text goes here

Usage: single_file_script [OPTIONS] [FOLDER]

Arguments:
  [FOLDER]  Specify the root directory or uses current directory if not provided [default: .]

Options:
      --allow-dirty    Does not return an error for dirty files nor generate the list of said files
      --allow-no-vcs   This option basically disables checking. If true no checks are done. (Not even if the `path`
                       exists)
      --allow-staged   Does not return an error for staged files nor generate the list of said files
  -o, --optional-flag  A boolean flag that is set to true if the argument is provided
      --mode <MODE>    Included to give an example for an enum [default: cat] [possible values: bird, cat, dog]
  -h, --help           Print help (see more with '--help')
  -V, --version        Print version
```
