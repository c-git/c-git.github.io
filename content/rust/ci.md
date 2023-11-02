+++
title="CI"
date=2023-09-03
+++

Source: <https://youtu.be/xUH-4y92jPg?si=3eY_i02onu60bVQ4&t=495>

Source GitRepo: <https://github.com/jonhoo/rust-ci-conf/>

Our GitRepo: <https://github.com/wykies/rust-ci-conf/>

# Link to CI Repo

To add to a repo with option to pull changes later

For SSH

```sh
git remote add ci git@github.com:wykies/rust-ci-conf.git
```

For HTTPS (Not tested)

```sh
git remote add ci https://github.com/wykies/rust-ci-conf.git
```

# Fetch from CI Repo

```sh
git fetch ci
```

# Initially merge into current history

**Warning**: If you are using gitflow, initialize it **BEFORE** doing this. See [reason / case tested](@/rust/ci.md#explanation-of-problem-situation).

```sh
git merge --allow-unrelated ci/main
```

# Update with new CI config

When the CI has been updated and you want to pull in the updates use the following command.

```sh
git merge ci/main
```

# Explanation of problem situation

Problem is that I was using the `--allow-unrelated` each time. And it was copying in the entire remote history each time. But this only seemed to happen if I initialized gitflow after having done the initial time. See actual steps that caused this problem. This may not be the only possible reason, more testing was not done to disprove other solutions.

Discovered this by:

- Running the [initial merge][init] command on main
- Repeating the [initial merge][init] on main to confirm it says "Already up to date"
- Initializing gitflow
- Trying the [initial merge][init] command again on develop and noticing that it brought in all the history again.
- Repeated several times and each time it brought in all the history again
- After resting the history I did it on develop and repeated without issue.
- Branched off develop and used the [initial merge][init] command again and it said up to date

[init]: @/rust/ci.md#initially-merge-into-current-history
