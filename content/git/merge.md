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

## Taking all of one side

**WARNING: This literally just takes all of one side it's not selective**.

Note: If you are unclear what `theirs` and `ours` refers to it's best to consult [the docs](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---theirs) before issuing any commands.

<details>

<summary>Old approach</summary>

Source: <https://stackoverflow.com/questions/10697463/resolve-git-merge-conflicts-in-favor-of-their-changes-during-a-pull>

I am keeping this version for reference but I no longer think it's a good approach because it is not exactly what I think of as take theirs.
It will for example give errors for files that exist in `ours` but not in `theirs`, which kinda isn't what I want.
If you are already in the merging state and have conflicts and want to take all of ours or theirs you can use one of following.

```sh
git checkout --theirs .
```

If you want to do the opposite:

```sh
git checkout --ours .
```

You can mark all the conflicts resolved after by using `git add .` or `git add -u` to only stage tracked files.

</details>

When issuing the checkout command specify if you want `ours` or `theirs`.

```sh
git merge -X theirs <branch-name>
```
