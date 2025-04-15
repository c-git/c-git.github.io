+++
title="Merge Conflict"
date = 2023-11-02
updated = 2023-11-08
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

# Accept their/ours

Source: <https://stackoverflow.com/questions/914939/simple-tool-to-accept-theirs-or-accept-mine-on-a-whole-file-using-git>

For conflicts it's generally best to look at each and make a decision.
If you are a priori sure which one you want, here are the commands to do it without opening the file to see.

**Warning!**: If you are rebasing `--ours` and `--theirs` are swapped.

## Take ours

```sh
git checkout HEAD -- <filename>
```

## Take theirs

```sh
git checkout --theirs -- <filename>
```
