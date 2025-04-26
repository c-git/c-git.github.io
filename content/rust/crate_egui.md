+++
title = "Crate egui"
date = 2024-09-05
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
updated = 2025-04-26
+++

# Get window size

Source: <https://github.com/emilk/egui/discussions/2015>

```rust
ctx.input(|i| {
    if let Some(rect) = i.viewport().outer_rect {
        dbg!(rect.size());
    }
});
```

# Prevent a UI from shrinking if the contents get smaller

Source: <https://github.com/emilk/egui/discussions/465>

The example below checks for changes in hight but width should be similar.
Without the if statement it causes the widget to grow if the contents get bigger.

```rust
if ui.available_height() > 0.0 {
    ui.allocate_space(ui.available_size());
}
```
