+++
title = "Iterators"
date = 2024-09-05
updated = 2024-12-18
+++

# References

[Blog post](https://aloso.github.io/2021/03/09/creating-an-iterator) on how to use iterator to traverse a tree

# Examples

Copied from an example by [robjtede @ Actix Web](https://github.com/robjtede) on discord. It was an aside to Tim's [video](https://www.youtube.com/watch?v=RQE4GeDe4yw)

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
itertools = "0.12.1"
---

use itertools::Itertools as _;

fn main() {
    let pas = Pas::new();

    for row in pas.take(8) {
        println!("{}", row.iter().join(", "));
    }
}

#[derive(Debug)]
struct Pas {
    row: u32,
    prev: Vec<i32>,
}

impl Pas {
    fn new() -> Self {
        Self {
            row: 0,
            prev: vec![1],
        }
    }
}

impl Iterator for Pas {
    type Item = Vec<i32>;

    fn next(&mut self) -> Option<Self::Item> {
        self.row += 1;

        if self.row == 1 {
            return Some(self.prev.clone());
        }

        self.prev.insert(0, 0);
        self.prev.push(0);

        self.prev = self
            .prev
            .iter()
            .tuple_windows()
            .map(|(a, b)| a + b)
            .collect();

        Some(self.prev.clone())
    }
}
```
