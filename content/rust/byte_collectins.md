+++
title="Working with collections of bytes"
date=2023-11-06
+++

# Converting to String

Some types use byte arrays instead of strings and you may want to convert them to strings based on your use case.
For example std::process::Output[Output](https://doc.rust-lang.org/std/process/struct.Output.html) uses by `Vec<u8>` to store both `stdout` and `stderr`.
Use the following to convert them to strings.

Note that if you only want to print them to stdout it isn't required to convert them as also shown in the example from [std](https://doc.rust-lang.org/std/process/struct.Command.html#method.output)

```rust
use std::process::Command;
use std::io::{self, Write};
let output = Command::new("/bin/cat")
                     .arg("file.txt")
                     .output()
                     .expect("failed to execute process");

println!("status: {}", output.status);
io::stdout().write_all(&output.stdout).unwrap();
io::stderr().write_all(&output.stderr).unwrap();

assert!(output.status.success());

let data = &output.stdout;
match str::from_utf8(data) {
    Ok(s) => {
        println!("{s}");
    }
    Err(e) => {
        println!("{e:?} - {data:?}");
    }
}
```
