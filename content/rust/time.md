+++
title="Time"
+++

# Standard Library

Unless you're only measuring duration you're probably going to want to reach for chrono. See example below of how to measure duration.

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
