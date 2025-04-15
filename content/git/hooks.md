+++
title = "Hooks Examples"
date = 2023-12-20
update = 2024-02-01
updated = 2024-10-04
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

# Skip commit hooks

Source: <https://stackoverflow.com/questions/7230820/skip-git-commit-hooks>

Add a `--no-verify` flag. Only tested on commit as below

```sh
git commit --no-verify
```

# pre-commit Hook to prevent changes to a zola project base_url

```bash
#!/bin/sh

# Check if we see the line with the base_url being changed
git diff --cached config.toml | grep "^-base_url"
if [ $? -eq 0 ]
then
    echo "Error: Change detected to base_url"
    exit 1
fi
```

# zola_chrono pre-push hook

[Link](@/misc/documentation_update.md#setting-up-a-pre-push-hook)

# Conventional Commit Checking

Simple (not robust) [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) checker.
Instead of copying code here that may go out of date here is a link to [one I have in](https://github.com/rust-practice/cargo-leet/blob/develop/scripts/commit-msg) use in a project.
In that same [folder](https://github.com/rust-practice/cargo-leet/tree/develop/scripts) are scripts to set it up if you don't already know how to do it.
If you are still running into issues please reach out via github issues (see link in footer).
