+++
title="String Formatting"
date=2023-07-12
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
