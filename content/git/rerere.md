+++
title = "rerere"
date = 2024-02-02
extra = { series = "Git" }
taxonomies = { tags = ["Git"] }
updated = 2025-04-26
+++

Source: <https://git-scm.com/docs/git-rerere>

If you have long lived branches this is helpful to store how to resolve conflicts you've solved before.

# Enable

```sh
git config --global rerere.enabled 1
```

# Clean Up

```sh
git rerere gc
```
