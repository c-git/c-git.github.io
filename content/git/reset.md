+++
title='Reset'
date = 2022-08-26
updated = 2024-06-02
+++

# Reset to current head and discard all including stash

```sh
git reset --hard
```

# Undo accidental reset

Source: <https://stackoverflow.com/questions/5788037/recover-from-losing-uncommitted-changes-by-git-reset-hard>

```sh
git reflog show
```

then use the `HEAD@{?}` and replace the question mark like

```sh
git reset HEAD@{1}
```
