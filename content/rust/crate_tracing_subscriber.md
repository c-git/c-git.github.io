+++
title = "Crate Tracing Subscriber"
date = 2024-11-24
+++

# Crate Docs

<https://docs.rs/tracing-subscriber/latest/tracing_subscriber/>

# Example initialization

Other examples available [here](https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#examples)

Requires features: `env-filter` and `std`

```rust
use tracing_subscriber::{fmt, prelude::*, EnvFilter};

tracing_subscriber::registry()
    .with(fmt::layer())
    .with(EnvFilter::try_from_default_env().unwrap_or_else(|_| {
        EnvFilter::new(if cfg!(debug_assertions) {
            "info"
        } else {
            "warn"
        })
    }))
    .init();
```
