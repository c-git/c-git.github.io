+++
title="String Formatting"
date=2023-07-12
updated = 2025-04-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

Source: <https://doc.rust-lang.org/std/fmt/>

# Precision

Source: <https://doc.rust-lang.org/std/fmt/#precision>

```rust
let x = 0.01;
println!("Hello x is {x:.5}");
```

Prints: "Hello x is 0.01000"

# Fill/Alignment

Source: <https://doc.rust-lang.org/std/fmt/#fillalignment>

```rust
let hours = 3;
println!("{hours:0>2}:25")
```

Prints: "03:25"

# Pretty Printing

Source: <https://doc.rust-lang.org/std/fmt/#sign0>

'#?' - pretty-print the Debug formatting (adds line breaks and indentation)

```rust
format!("{:#?}", (100, 200));     // => "(
                                  //       100,
                                  //       200,
                                  //     )"
```

# Separators in number

Source: <https://stackoverflow.com/questions/26998485/is-it-possible-to-print-a-number-formatted-with-thousand-separator-in-rust>
Source: <https://play.rust-lang.org/?version=stable&mode=release&edition=2021&gist=2e4916721f625988d9a4f9a5cdb635ae>

There are crates that do this but this snippet is simple and adds no dependencies

```rust
fn main() {
    let val = 10_000_000i32;
    let mut num = val
        .abs()
        .to_string()
        .as_bytes()
        .rchunks(3)
        .rev()
        .map(std::str::from_utf8)
        .collect::<Result<Vec<&str>, _>>()
        .unwrap()
        .join(","); // separator
    if val < 0 {
        num = format!("-{num}")
    }
    println!("{num}");
    // Prints "10,000,000"
}
```
