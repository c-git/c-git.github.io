+++
title="Merge"
date = 2023-04-17
updated = 2026-04-23
extra = { series = "Git" }
taxonomies = { tags = ["Git"] }
+++

# Aborting a merge

It is sometimes possible to abort a merge for example if there is a conflict and the merge is not completed.

```sh
git merge --abort
```

# Merge conflicts

Source: <https://stackoverflow.com/questions/10697463/resolve-git-merge-conflicts-in-favor-of-their-changes-during-a-pull>

## Taking all of one side

**WARNING: This literally just takes all of one side it's not selective**.

If you are already in the merging state and have conflicts and want to take all of ours or theirs you can use one of following.
If you are unclear what `theirs` and `ours` refers to it's best to consult [the docs](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---theirs) and note it matters if you are rebasing (but this section I'm talking about merging).

```sh
git checkout --theirs .
```

If you want to do the opposite:

```sh
git checkout --ours .
```

You can mark all the conflicts resolved after by using `git add .` or `git add -u` to only stage tracked files.
