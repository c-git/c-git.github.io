+++
title="Time"
date=2023-08-15
updated=2023-11-06
+++

# Standard Library

Unless you're only measuring duration you're probably going to want to reach for chrono. See example below of how to measure duration.
Note that duration does **NOT** keep counting if the computer goes to sleep (The time while the computer is suspended does not count).

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

# Display current date/time

Source: <https://rust-lang-nursery.github.io/rust-cookbook/datetime/parse.html#display-formatted-date-and-time>

See [Formatting Syntax](#formatting-syntax) for more details on options regarding formatting.

```rust
use chrono::{DateTime, Utc};

fn main() {
    // let now: DateTime<Utc> = Utc::now();
    let now = Local::now();

    println!("Local time now is: {}", now);
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
