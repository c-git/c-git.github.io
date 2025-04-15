+++
title = "rerere"
date = 2024-02-02
extra = { series = "git" }
taxonomies = { tags = ["git"] }
updated = 2025-04-15
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
