+++
title="Remotes"
date = 2023-07-21
updated = 2023-11-08
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

Source: <https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories>

# List remotes

```sh
git remote -v
```

# Change remote URL

```sh
git remote set-url origin git@github.com:OWNER/REPOSITORY.git
```

# Add remote

Source: New github repo

Usually when a new repo is created this command is provided, and this is generally the easiest way to add it as no modification is needed just copy and paste.

```sh
git remote add origin git@github.com:OWNER/REPOSITORY.git
```

# Clear out remotes that no longer exist

```sh
git fetch --prune
```
