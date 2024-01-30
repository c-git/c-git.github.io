+++
title = "Crate Clap"
date = 2024-01-30
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
