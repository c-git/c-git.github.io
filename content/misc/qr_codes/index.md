+++
title = "QR Codes"
date = 2024-11-01
taxonomies = { tags = ["Misc"] }
updated = 2026-02-17
+++

# My personal website (This site)

{{ qr_code(href="https://chester.wykies.com", img="qr_code_personal_site.png") }}

# LinkedIn

{{ qr_code(href="https://www.linkedin.com/in/cwyke", img="qr_code_linkedin.png") }}

# GitHub

{{ qr_code(href="https://github.com/c-git/", img="qr_code_github.png") }}

# Using included apps on your phone to create QR Codes

This was tested on a Samsung Android phone.
Not sure how well this generalizes.

1. Go to the phone app
2. Go to the contacts tab
3. Find the contact you want to create the QR Code for (add them and come back if you don't have them saved, eg. create a contact for yourself for the info you want to share)
4. Tap on the contact to bring up the options\
   ![screen shot](contact_options.png)
5. Select the "i" option to open the contact details
6. Use the three dots labelled `More` to open the context menu
7. Select `QR code`
8. Use the `Share` button to do with it what seems good to you

# Decoding QR codes

I was fortunate to notice a very cool rust crate in [This Week In Rust](https://this-week-in-rust.org/blog/2026/02/11/this-week-in-rust-638/#crate-of-the-week).
It's called [zedbar](https://crates.io/crates/zedbar) and is:

- a [webpage](https://zedbar.org/) running wasm that you can drag and drop images onto
- a library that can be included in your [rust](https://crates.io/crates/zedbar) or [Node.js](https://www.npmjs.com/package/zedbar) project (via WASM)
- a CLI that you can install using `cargo`

```sh
cargo install zedbar
```

See sample output from the CLI below on the QR code for my website

```sh
$ zedbarimg qr_code_personal_site.png
QrCode:https://chester.wykies.com/
scanned 1 barcode symbols from 1 image(s)
```
