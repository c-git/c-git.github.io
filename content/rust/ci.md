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

# Merge history from CI Repo

```sh
git fetch ci
git merge --allow-unrelated ci/main
```
