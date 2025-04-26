+++
title = "Regex"
date = 2024-12-02
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
updated = 2025-04-26
+++

# Capture first match

NB: If regex is not executed more than once then you may opt to not use the Cells but they remove the need to recompile the regex.

Dependencies (`anyhow` is not needed by makes the code cleaner)

```sh
cargo add regex
cargo add anyhow
```

```rust
use anyhow::Context as _;
use regex::Regex;
use std::sync::OnceLock;

fn main() -> anyhow::Result<()> {
    static CELL: OnceLock<Regex> = OnceLock::new();
    let re = CELL.get_or_init(|| {
        Regex::new(r"(\d+)").expect("failed to compile static regex that was known at design time")
    });

    let haystack = "There are 20 bad apples in the batch of 100";
    let captures = re
        .captures(haystack)
        .with_context(|| format!("failed to find a match in: {haystack:?}"))?;
    let number = captures
        .get(1)
        .with_context(|| format!("failed to extract number from: {haystack:?}"))?
        .as_str();
    // Prints: The number 20 was found in "There are 20 bad apples in the batch of 100"
    println!("The number {number} was found in {haystack:?}");
    Ok(())
}
```

# Capture all matches

See notes on [Capture first match](#capture-first-match)

```sh
cargo add regex
cargo add anyhow
```

```rust
use anyhow::Context as _;
use regex::Regex;
use std::sync::OnceLock;

fn main() -> anyhow::Result<()> {
    static CELL: OnceLock<Regex> = OnceLock::new();
    let re = CELL.get_or_init(|| {
        Regex::new(r"(\d+)").expect("failed to compile static regex that was known at design time")
    });

    let haystack = "There are 20 bad apples in the batch of 100";
    let captures_iter = re.captures_iter(haystack);
    for captures in captures_iter {
        let number = captures
            .get(1)
            .with_context(|| format!("failed to extract number from: {haystack:?}"))?
            .as_str();
        println!("A number {number} was found in {haystack:?}");
    }

    // Prints:
    // A number 20 was found in "There are 20 bad apples in the batch of 100"
    // A number 100 was found in "There are 20 bad apples in the batch of 100"

    Ok(())
}
```
