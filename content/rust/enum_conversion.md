+++
title = "Enum Conversion"
date = 2025-01-19
+++

# Switching back and forth between an Enum and u8

Sources:

- <https://stackoverflow.com/a/76785380>
- <https://stackoverflow.com/a/76299020>

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
strum = { version = "0.26.3", features = ["derive"] }
---

use strum::FromRepr;

#[derive(FromRepr, Debug, PartialEq)]
#[repr(u8)]
enum MyEnum {
    A = 1,
    B,
    C,
}

fn main() {
    // u8 to Enum
    let x = MyEnum::from_repr(2);
    assert_eq!(x, Some(MyEnum::B));

    // Enum to u8
    let x = MyEnum::C as u8;
    assert_eq!(x, 3);
}
```
