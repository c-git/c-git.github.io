+++
title="Strange Problems and Fixes"
date = 2023-04-13
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

# Ctrl + .

Seemingly randomly (probably from an update) `Ctrl + .` just stopped working and started producing an e and some weird behaviour. Found [this](https://unix.stackexchange.com/questions/692237/ctrl-displays-e-character-and-captures-the-keyboard-shortcut) article that explained a fix but no idea why it started. To fix run `ibus-setup` then under Emoji's remove `\<Control\> + Period`.
