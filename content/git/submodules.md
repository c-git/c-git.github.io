+++
title="Submodules"
date = 2023-04-14
updated = 2024-12-08
+++

# Add a new submodule

For path prefer relative paths (See example below)

```sh
git submodule add ../ts_lib.git
```

# Using already setup submodules

Source: <https://stackoverflow.com/questions/1030169/pull-latest-changes-for-all-git-submodules>

## Initialize

```sh
git submodule update --init --recursive
```

## Update

```sh
git pull --recurse-submodules
```

Source: <https://www.damirscorner.com/blog/posts/20210423-ChangingUrlsOfGitSubmodules.html>

# Problem with absolute links

Uses using HTTPS need one format while users using SSH need a different format

## HTTPS Format

```
[submodule "modules/mySubmodule"]
    path = modules/mySubmodule
    url = https://github.com/damirarh/mySubmodule.git
```

## SSH Format

```
[submodule "modules/mySubmodule"]
    path = modules/mySubmodule
    url = git@github.com:damirarh/mySubmodule.git
```

## How relative links work

They relate the submodule link to the link of the parent module, so it omits what protocol to use for the connection and
therefore works for both.
This means it will only work if both repos are hosted on the same service. If not in the same top level account just use
the appropriate number of `../`. So if in the same account you would use `../` whereas if they were in different ones
you would use `../../`

### Relative Format

```
[submodule "modules/mySubmodule"]
    path = modules/mySubmodule
    url = ../mySubmodule.git
```

## Steps to change from absolute to relative links

_NB: Not tested_

1. Modify the URL value in the `.gitmodules` file to make it relative. Then commit this file to Git.
2. Force submodules to resynchronize with the modified file using the following command in the folder with the
   modified `.gitmodules` file (not necessarily the repository root if its submodules contain other nested submodules)

```sh
git submodule update --init --recursive --remote
```

# Remove a submodule

```sh
git rm <path-to-submodule>
```

# Impacts on github workflows

If your code depends on the submodule being there then you'll need to ensure it gets checked out.
You'll need to add with `submodules: recursive` to your checkout step (See example below).
Also used in CI for [this repo](https://github.com/c-git/c-git.github.io/tree/main/.github/workflows).

```yaml
- name: Checkout repo
    uses: actions/checkout@v4
    with:
        submodules: recursive
```
