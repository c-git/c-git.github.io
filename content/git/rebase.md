+++
title="Rebase"
date = 2023-06-28
updated = 2025-04-26
extra = { series = "Git" }
taxonomies = { tags = ["Git"] }
+++

# Rebase onto develop

```sh
git rebase develop
```

If you'd already pushed the branch before you'll need to do a force push

```sh
git push -f
```

# Rebase interactive

Source: <https://git-scm.com/docs/git-rebase>

## Unpushed

Observation: Only seems to rebase unpushed commits.

```sh
git rebase -i
```

## Including Pushed

```sh
git rebase -i --onto develop
```

# Rebase your branch after someone else force pushes to it

These erase what you have locally with the info from remote

## This works for me (but saw it didn't work for others)

```
git pull -f
```

## This one worked when the one above didn't work

Source: Trippy Maintainers Chat (Included a link to [guidance](https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head))

```sh
git fetch
git reset origin/my-branch --hard
```
