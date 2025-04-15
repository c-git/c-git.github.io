+++
title = "Push"
date = 2024-02-04
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

Source: <https://git-scm.com/docs/git-push>

# Force pushing

WARNING: The command given here doesn't work well if fetch runs in background. See source for more notes.

If working on a project where you aren't the only committer it's better to use the with lease option so that if you check locally that you want to blow away the version you see of the remote branch on your machine then that is only what gets destroyed when you push.
If someone else pushing after what you have on your machine it won't match and you'll get notified.

From source above

> `--force-with-lease` alone, without specifying the details, will protect all remote refs that are going to be updated by requiring their current value to be the same as the remote-tracking branch we have for them.

```sh
git push --force-with-lease
```
