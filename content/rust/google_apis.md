+++
title = "Google APIs"
date = 2025-03-20
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
updated = 2025-04-26
+++

# Google Sheets

## Foreword

It's been a journey trying to decide what would be the most sustainable way to interact with Google's API for "Google Sheets".
Seems that currently Google is currently developing a [client library](https://github.com/googleapis/google-cloud-rust) for rust but it isn't done yet.
My current use case isn't amenable to a still experimental API thus I decided to use the next best one.
[Byron](https://github.com/Byron) setup a [repo](https://github.com/Byron/google-apis-rs) to generate clients based on Google's discovery service.
He really did a very good job with it and it seems to at present be the best option.
I also considered [one](https://docs.rs/sheets/latest/sheets/) created by the [Oxide Computer Company](https://github.com/oxidecomputer) but decided to use the one Byron created as his also came with a CLI that I could use to better understand how to use it.

## Using [google_sheets4](https://docs.rs/google-sheets4/latest/google_sheets4/index.html)

Sources:

- [Medium Article](https://medium.com/@iamchrisgrounds/google-sheets-with-rust-6ecab23fa765) by Chris Grounds
- Auto [generated CLI](https://github.com/Byron/google-apis-rs/tree/main/gen/sheets4-cli) created by Byron

**WIP** The project I was going to use this on has been paused but already started the notes so saving them.
