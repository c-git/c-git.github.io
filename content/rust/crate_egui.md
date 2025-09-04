+++
title = "Crate egui"
date = 2024-09-05
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
updated = 2025-09-03
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

# Accommodate dark monitors

<details>
  <summary>See back story</summary>

I use the screen a lot and don't like my main screen very bright or very high contrast.
One might even say I've set it too low.
Unfortunately, that means that the default dark theme for egui is extremely low contrast on my screen and thus I need to change from the defaults.
I keep forgetting what I have to change so I'm going to make notes here to make it easier for next time.

</details>

Using the built in settings page (needs to exposed by application, like it is on <https://egui.rs> in the Backend window).

`Style` -> `Visuals` -> `Background colors`

```
Windows = 64,64,64
Panels = 60,60,60
```
