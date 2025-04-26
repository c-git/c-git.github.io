+++
title="Time"
date=2023-08-15
updated = 2025-04-26
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
+++

# Standard Library

Unless you're only measuring duration you're probably going to want to reach for chrono. See example below of how to measure duration.
Note that duration does **NOT** keep counting if the computer goes to sleep (The time while the computer is suspended does not count).

## Measure duration

```rust
use std::time::{Duration, Instant};
use std::thread;

fn expensive_function() {
    thread::sleep(Duration::from_secs(1));
}

fn main() {
    let start = Instant::now();
    expensive_function();
    let duration = start.elapsed();

    println!("Time elapsed in expensive_function() is: {:?}", duration);
}
```

## Get duration since UNIX_EPOCH

Sources:

- <https://doc.rust-lang.org/std/time/constant.UNIX_EPOCH.html>
- <https://stackoverflow.com/questions/26593387/how-can-i-get-the-current-time-in-milliseconds>

```rust
use std::time::{SystemTime, UNIX_EPOCH};

match SystemTime::now().duration_since(UNIX_EPOCH) {
    Ok(n) => println!("1970-01-01 00:00:00 UTC was {} seconds ago!", n.as_secs()),
    Err(_) => panic!("SystemTime before UNIX EPOCH!"),
}
match UNIX_EPOCH.elapsed() {
        Ok(n) => println!("1970-01-01 00:00:00 UTC was {} seconds ago!", n.as_secs()),
        Err(_) => panic!("SystemTime before UNIX EPOCH!"),
    }
```

# Display current date/time

Source: <https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#display-formatted-date-and-time>

See [Formatting Syntax](#formatting-syntax) for more details on options regarding formatting.

```rust
fn main() { 
    let now: chrono::DateTime<chrono::Utc> = chrono::Utc::now();
    println!("UTC time now is: {}", now);

    let now = chrono::Local::now();
    println!("Local time now is: {}", now);
}
```

# Convert between timezones

Source: <https://stackoverflow.com/questions/28747694/how-do-i-convert-a-chrono-datetimeutc-instance-to-datetimelocal>

```rust
fn main() {
    let utc: chrono::DateTime<chrono::Utc> = chrono::Utc::now();
    let local: chrono::DateTime<chrono::Local> = chrono::DateTime::from(utc);
    println!("UTC time now is: {}", utc);
    println!("Local time now is: {}", local);
}
```

# In WASM

Source: <https://timclicks.dev/tip/convert-a-unix-timestamp-to-rust>

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
chrono = { version = "0.4.34", default-features = false, features = ["clock"] }
web-time = "1.0.0"
---

fn main() {
    println!("The date and time now is {}", now_date_time_as_string());
    println!(
        "The date and time now is {}",
        now_date_time_as_string_native_only()
    );
}

fn now_date_time_as_string() -> String {
    use chrono::TimeZone as _;
    let time_stamp = web_time::SystemTime::UNIX_EPOCH
        .elapsed()
        .expect("expected date on system to be after the epoch")
        .as_secs();

    let time_stamp = time_stamp
        .try_into()
        .expect("wow this program wasn't meant to last that long");

    let dt = chrono::DateTime::from_timestamp(time_stamp, 0)
        .unwrap()
        .with_timezone(&chrono::Local);
        
    dt.format("%c").to_string()
}

// Other version use web_time instead of std::time so it can work in WASM
// If you don't need WASM use this version
fn now_date_time_as_string_native_only() -> String {
    chrono::Local::now().format("%c").to_string()
}
```

# Formatting syntax

See [docs.rs](https://docs.rs/chrono/latest/chrono/format/strftime/index.html#specifiers) for full details

Excerpt from docs.rs

| Spec. |         Example         | Description                                                            |
| :---- | :---------------------: | :--------------------------------------------------------------------- |
| %F    |       2001-07-08        | Year-month-day format (ISO 8601). Same as %Y-%m-%d.                    |
| %T    |        00:34:60         | Hour-minute-second format. Same as %H:%M:%S.                           |
| %c    | Sun Jul 8 00:34:60 2001 | Locale’s date and time (e.g., Thu Mar 3 23:05:25 2005).                |
| %a    |           Sun           | Abbreviated weekday name. Always 3 letters.                            |
| %A    |         Sunday          | Full weekday name. Also accepts corresponding abbreviation in parsing. |

## Example usage

Source: <https://docs.rs/chrono/latest/chrono/offset/struct.Local.html#method.now>

```rust
use chrono::DateTime;
use chrono::FixedOffset;
use chrono::Local;
fn main() {
    // Current local time
    let now = Local::now();
    println!("Formatted output: {}", now.format("%Y-%m-%d %H:%M:%S"));
    println!("now: {now}");

    // Current local date
    let today = now.date_naive();
    println!("today: {today}");

    // Current local time, converted to `DateTime<FixedOffset>`
    let now_fixed_offset = Local::now().fixed_offset();
    println!("now_fixed_offset: {now_fixed_offset}");
    // or
    let now_fixed_offset: DateTime<FixedOffset> = Local::now().into();
    println!("now_fixed_offset: {now_fixed_offset}");

    // Current time in some timezone (let's use +05:00)
    // Note that it is usually more efficient to use `Utc::now` for this use case.
    let offset = FixedOffset::east_opt(5 * 60 * 60).unwrap();
    println!("offset: {offset}");
    let now_with_offset = Local::now().with_timezone(&offset);
    println!("now_with_offset: {now_with_offset}");
}
```

Output:

```
Formatted output: 2023-11-06 18:08:19
now: 2023-11-06 18:08:19.700476942 +00:00
today: 2023-11-06
now_fixed_offset: 2023-11-06 18:08:19.700581396 +00:00
now_fixed_offset: 2023-11-06 18:08:19.700585376 +00:00
offset: +05:00
now_with_offset: 2023-11-06 23:08:19.700591966 +05:00
```
