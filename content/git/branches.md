+++
title='Branches'
date = 2023-10-28
updated = 2023-11-08
+++

Source: <https://www.nobledesktop.com/learn/git/git-branches>

# See branches

NB: The current branch will have a `*` next to it.

## Both local and remote

```sh
git branch -a
```

## Remote only

```sh
git branch -r
```

## Local only

```sh
git branch
```

# Checkout a branch

Use `git switch` or `git checkout` followed by the branch name.
Prefer `switch` as `checkout` has other functionality that it can do to restore files as per [SO](https://stackoverflow.com/questions/57265785/whats-the-difference-between-git-switch-and-git-checkout-branch) and `switch` was introduced to be used for changing branches.
Note do not include the `remote/origin` in the command it will automatically create the local branch and set it up to track the remote branch.
Eg to check out develop use:

```sh
git switch develop
```

# Create a branch

Source: <https://www.atlassian.com/git/tutorials/using-branches/git-checkout>

Create Only

```sh
git branch new_branch
```

Create and checkout

```sh
git checkout -b new_branch
```

# Delete a remote tracking branch after the branch has been deleted on the remote

- r is for remote
- d is for delete

```sh
git branch -rd origin/TRACKING_BRANCH_NAME
```
