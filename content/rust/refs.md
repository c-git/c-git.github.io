+++
title='References'
date=2023-05-29
updated= 2024-01-02
+++

# Official

- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html)
- [API Guidelines Checklist](https://rust-lang.github.io/api-guidelines/checklist.html)
- Naming conventions - [API Guide](https://rust-lang.github.io/api-guidelines/naming.html)
- Documentation - [API Guide](https://rust-lang.github.io/api-guidelines/documentation.html)
- Selecting a collection - [Module std::collections](https://doc.rust-lang.org/std/collections/index.html)
- Setting up defaults - [Trait std::default::Default](https://doc.rust-lang.org/std/default/trait.Default.html)
- Attributes - [The Rust Reference](https://doc.rust-lang.org/reference/attributes.html)
  - Code like `#![]` and `#[]`
  - I always thought they were compiler directives
- Minimal Reproducible Example tips - [Stack Overflow Rust Info](https://stackoverflow.com/tags/rust/info)
- Conditional Compilation
  - [The Rust Reference](https://doc.rust-lang.org/reference/conditional-compilation.html#debug_assertions)
  - [Internal Notes](@/rust/conditional_compilation.md)
- Managing External Processes - [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/os/external.html)
- Testing CLI Applications by running them
  - [CLI Book](https://rust-cli.github.io/book/tutorial/testing.html#testing-cli-applications-by-running-them)
  - [Example Snippet](@/rust/snippets.md#run-cli-app-to-test-it)
- Filing reports of unclear error messages (Choose Diagnostic) - [Rust Issues](https://github.com/rust-lang/rust/issues/new/choose)
- Crate.io and Docs.rs issue status - <https://status.crates.io/>
- Build Queue for Docs.rs - [docs.rs](https://docs.rs/releases/queue)
- Raw Pointers - [std docs](https://doc.rust-lang.org/std/primitive.pointer.html)
- Magic Completions - [Rust Analyzer User Manual](https://rust-analyzer.github.io/manual.html#magic-completions)
- Directory Traversal - [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/file/dir.html)
- Recommended way to write `expect` messages - [std docs](https://doc.rust-lang.org/core/result/enum.Result.html#recommended-message-style)

# Reference Books (Also see [Official](@/rust/refs.md#official))

- Collection patters, idioms and anti-patterns - [Rust design patterns](https://rust-unofficial.github.io/patterns/)

# Blog Posts

- Iterators - [Creating an Iterator](https://aloso.github.io/2021/03/09/creating-an-iterator)
- [Default arguments for functions in Rust using macros](https://rust.code-maven.com/default-arguments-for-functions)

# Podcasts

- [Rustacean Station](https://rustacean-station.org/) - Current community run podcast
- [New Rustacean](https://newrustacean.com/) - Stopped but it's where I started. This podcast introduced me to rust and got me excited before I read the book and actually tried it myself (converted commute time into see if I like this rust thing time). I think the main reason it got me excited is that he spoke about the parts of rust that I was interested in and maybe contributed to making it easier to learn rust. I found learning rust easy but that's not a sentiment I've heard from many other people so maybe this is why it was easy for me.

# Video

See [here](@misc/youtube_ref_videos.md#rust) for youtube videos.

# Useful crates

- [log](https://docs.rs/log/) - A lightweight logging facade
- [log4rs](https://docs.rs/log4rs/) - a highly configurable logging framework modeled after Java’s Logback and log4j libraries.
  - Logging patterns [patterns](https://docs.rs/log4rs/*/log4rs/encode/pattern/index.html)
- [tracing](https://docs.rs/tracing/latest/tracing/index.html)
  - [Shorthand Macros](https://docs.rs/tracing/latest/tracing/#shorthand-macros)
- [float_eq](https://docs.rs/float_eq/) - Compare IEEE floating point primitives, structs and collections for equality
- [float_ord](https://docs.rs/float-ord/latest/float_ord/) - Add Ord for floats (used as `FloatOrd(1.0)`)
- [inventory](https://docs.rs/inventory/) - Typed distributed plugin registration.
- List of [my crates](https://crates.io/users/c-git) on crates.io

# GitHub Actions

- [Toolchain](https://github.com/actions-rs/toolchain)

# Lints

- [The rustdoc book](https://doc.rust-lang.org/rustdoc/lints.html)
