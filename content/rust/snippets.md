+++
title = "Snippets"
date = 2023-09-02
updated = 2024-02-06
+++

# Boilerplate

## New and Default

```rust
impl MyType {
    /// Creates a new [`MyType`] `struct`
    pub fn new() -> Self {
        Self {
            field1: "value1",
            field2: "value2",
        }
    }
}

impl Default for MyType {
    fn default() -> Self {
        Self::new()
    }
}
```

## Derive (Base)

```rust
#[derive(Copy, Clone, Eq, PartialEq, Ord, PartialOrd, Hash, Debug, Default)]
pub struct MyType {}
```

## Derive (Serde)

```rust
use serde::{Deserialize, Serialize};

#[derive(Copy, Clone, Eq, PartialEq, Ord, PartialOrd, Hash, Debug, Default, Serialize, Deserialize)]
pub struct MyType {}
```

# Library Candidates

## Read number from stdin

Source: <https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#handling-invalid-input>

```rust
use std::io;

fn main() {
    println!("Please input a number");

    let mut user_input = String::new();

    io::stdin()
        .read_line(&mut user_input)
        .expect("Failed to read line");

    if let Ok(num) = user_input.trim().parse::<u32>() {
        println!("The number entered is {num}");
    }
}
```

## Read file (line by line)

Source: <https://doc.rust-lang.org/rust-by-example/std_misc/file/read_lines.html>

```rust
use std::error::Error;
use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;

fn main() -> Result<(), Box<dyn Error>> {
    for line in read_lines("filename")? {
        let line = line?;
        println!("{line}");
    }
    Ok(())
}

// The output is wrapped in a Result to allow matching on errors
// Returns an Iterator to the Reader of the lines of the file.
fn read_lines<P: AsRef<Path>>(path: P) -> io::Result<io::Lines<io::BufReader<File>>>
{
    let file = File::open(path)?;
    Ok(io::BufReader::new(file).lines())
}
```

## Read file to string

```rust
fn main() -> Result<(), Box<dyn Error>> {
    let _ = fs::read_to_string("filename")?;
    Ok(())
}
```

## Write string to a file

```rust
use std::{error::Error, io::Write, path::Path};

fn main() -> Result<(), Box<dyn Error>> {
    write_to_path("filename.txt", "text for file")?;
    Ok(())
}

fn write_to_path<P: AsRef<Path>>(path: P, s: &str) -> Result<(), Box<dyn Error>> {
    // Create a new file if it doesn't exist or open the file if it already exists
    let mut file = std::fs::OpenOptions::new().write(true).create(true).open(path)?;
    file.write_all(s.as_bytes())?;
    Ok(())
}
```

## Print without line return (and flush)

Note: flush is required as `print!()` does not automatically flush like `println!()` does

```rust
print!("This may not print when we want unless we flush");
io::stdout().flush()?;
```

# Tests

## Unit tests

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
```

## Panic expectation

```rust
#[should_panic(expected = "message seems to need to be on first line of text")]
fn it_should_panic() {}
```

## Run CLI App to test it

NOTE: Only works from integration tests

```toml
# Cargo.toml
[dev-dependencies]
assert_cmd = "2.0.7"
predicates = "2.1.5"
```

```rust
// main.rs
use std::io::BufRead;

fn main() {
    for line in std::io::stdin().lock().lines() {
        println!("{}", line.expect("Unable to read input line"));
    }
}
```

```rust
// tests/integration_test.rs
use assert_cmd::prelude::*; // Add methods on commands
use predicates::prelude::*; // Used for writing assertions
use std::{
    fs::{self, File},
    process::Command,
};

#[test]
fn run_executable() -> Result<(), Box<dyn std::error::Error>> {
    // You may want to include the calls to trim but depending on your use case you might not.
    // They are optional but included as they are easier to remove than figure out where to add
    // Note that input it not trimmed, only expected_output and output

    let input_file = File::open("input.txt")?;
    let expected_output_filename = "expected_output.txt";
    let expected_output = fs::read_to_string(expected_output_filename)
        .map_err(|e| format!("Failed to load output: {expected_output_filename} Error:{e}"))?
        .trim() // Trim expected output
        .to_owned();

    Command::cargo_bin("myapp")?
        .stdin(input_file)
        .assert()
        .stdout(
            predicate::str::diff(expected_output).trim(), // Trims actual output
        );
    Ok(())
}
```

# Get input arguments to a program

Source: <https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html#saving-the-argument-values-in-variables>

```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    let query = &args[1];
    let file_path = &args[2];

    println!("Searching for {}", query);
    println!("In file {}", file_path);
}
```

# Loop nesting and labels

Source: <https://doc.rust-lang.org/rust-by-example/flow_control/loop/nested.html>

```rust
fn main() {
    'outer: loop {
        println!("Entered the outer loop");

        'inner: loop {
            println!("Entered the inner loop");

            // This would break only the inner loop
            //break;

            // This breaks the outer loop
            break 'outer;
        }

        println!("This point will never be reached");
    }

    println!("Exited the outer loop");
}
```

# Float Eq and Ord Wrapper

```rust
#[derive(Debug, Clone, Copy, PartialEq)]
/// Wraps a float and implements Ord but panics if value is NaN
struct FloatNonNAN(f64);
impl FloatNonNAN {
    /// Creates a new [Self] with constraint that value cannot be NAN or function panics
    pub fn new(value: f64) -> Self {
        assert!(
            !value.is_nan(),
            "NAN is not allowed as it is not equal to itself and thus invalid for an impl of Ord"
        );
        Self(value)
    }
}
impl Eq for FloatNonNAN {}
impl Ord for FloatNonNAN {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.0
            .partial_cmp(&other.0)
            .expect("This should work unless one of them is NAN")
    }
}
impl PartialOrd for FloatNonNAN {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        self.0.partial_cmp(&other.0)
    }
}
impl AsRef<f64> for FloatNonNAN {
    fn as_ref(&self) -> &f64 {
        &self.0
    }
}
impl PartialEq<f64> for FloatNonNAN {
    fn eq(&self, other: &f64) -> bool {
        &self.0 == other
    }
}
impl From<FloatNonNAN> for f64 {
    fn from(value: FloatNonNAN) -> Self {
        value.0
    }
}
impl std::ops::Mul for FloatNonNAN {
    type Output = Self;

    fn mul(self, rhs: Self) -> Self::Output {
        FloatNonNAN::new(self.0 * rhs.0)
    }
}
```

# Collect into a result

One fail means the first error is returned (Remember this from the rust book but couldn't find it).
Mostly needed when I'm using iterators and need to do a map step that may fail.
Usual issue is not remembering to wrap the good option in Ok.

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let numbers: Vec<u8> = (0..10).step_by(2).collect();
    let all_even: Vec<u8> = numbers
        .iter()
        .cloned()
        .map(|x| {
            if x % 2 == 0 {
                Ok(x)
            } else {
                Err("Oops we founds a odd number")
            }
        })
        .collect::<Result<Vec<u8>, _>>()?;
    println!("{all_even:?}");
    Ok(())
}
```

# Get number of seconds until midnight

Source: <https://stackoverflow.com/questions/47708305/calculate-the-duration-between-now-and-the-next-midnight-using-chrono>

Requires the [chrono](https://crates.io/crates/chrono) crate.

```rust
fn main() {
    let duration = seconds_to(1, 0, 0, 0).unwrap();

    println!("Duration until midnight {duration:?}");
}

fn seconds_to(days: i64, hour: u32, min: u32, sec: u32) -> Option<std::time::Duration> {
    let now = chrono::Local::now();

    let new_date_time = (now + chrono::Duration::days(days))
        .date_naive()
        .and_hms_opt(hour, min, sec)?;

    match new_date_time
        .signed_duration_since(now.naive_local())
        .to_std()
    {
        Ok(result) => Some(result),
        Err(e) => {
            dbg!(e); // Might want to log this error or return a result as suitable to your application
            None
        }
    }
}
```
