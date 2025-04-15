+++
title = "lettre"
date = 2025-03-15
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
updated = 2025-04-15
+++

# Sending email using smtp and Gmail

They have a pretty [clear example](https://github.com/lettre/lettre/blob/master/examples/smtp_tls.rs) on in their crate.
I'd just add that you should ensure you have 2 factor authentication enabled and then that will allow you to create an APP password that you can use for this purpose.
You'll also need to enable POP in settings.
