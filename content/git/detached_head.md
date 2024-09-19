+++
title = "Detached Head"
date = 2024-09-12
+++

# Recovering a detached head created from a hard reset

"Accidentally" did a hard reset and lost commits I'd done.

```sh
git reflog
```

This showed the commit with a `HEAD@{1}` next to it

```sh
git checkout HEAD@{1}
```

This moved me onto a detached head. And git gave me instructions how how to "save it"

```sh
git switch -c new_branch
```

This created a branch for my head and I just switched back to my previous branch and merged in the `new_branch`. (Did in vscode don't have command and they shouldn't be hard to find).