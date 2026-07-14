+++
title = "Create new egui project"
date = 2024-04-08
updated = 2026-07-14
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
+++

Currently have a PR in flight to address this <https://github.com/emilk/eframe_template/pull/227>.
In the mean while you may still use it with the instructions in the readme at <https://github.com/c-git/eframe_template/tree/create-cargo-generate-template>

See also the [windowed section](@/rust/create_new_egui_project.md#windowed-framework-application) below for an application with a basic windowing framework.

# TLDR from Readme

## See favorites setup

If you want to check what favorites you have created you can use the following command

```sh
cargo generate --list-favorites
```

## Use a favorite

```sh
cargo generate egui
```

## Use from github repo

```sh
```

# Windowed Framework Application

This basic framework is designed to allow one to easily spin up a new application that supports multiple windows.
The github repo can be found at <https://github.com/c-git/egui_windowed_application_template>.
See readme for more details or use the commands below if you've already done the setup (ie. installed cargo generate).

## Use a favorite

```sh
cargo generate egui_windowed
```

## Use from github repo

```sh
cargo generate c-git/egui_windowed_application_template --branch cargo-gen
```
