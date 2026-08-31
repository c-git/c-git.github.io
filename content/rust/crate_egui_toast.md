+++
title="Crate egui-toast"
date=2026-08-31
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
+++

# Add to an existing application

See example [commit][example_commit] adding it to the template. And a few notes on below.

1. Add `egui-toast` dependency
   ```sh
   cargo add egui-toast
   ```
2. Remove the `Debug` derive from any struct that will store the `egui_toast::Toasts` struct as it does not implement `Debug`.
3. Ensure `toasts.show(ui);` is added to the end of the ui update loop so it shows on top of everything else.

[example_commit]: https://github.com/c-git/egui_windowed_application_template/commit/00d4de5f81c7f916ef291933e176b8e195504888
