+++
title="Tags"
date = 2026-05-18
extra = { series = "Git" }
taxonomies = { tags = ["Git"] }
+++

# See existing tags

Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_listing_your_tags>

List all

```sh
git tag
```

Filter listing using wildcard pattern (eg.)

```sh
git tag -l "v1.*"
```

## See details about one of the tags

Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_annotated_tags>

```sh
git show [TagName]
```

# Creating Tags

Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags>

For annotated tags

```sh
git tag -a [TagName] -m $"Tag Message"
```

For lightweight tags

```sh
git tag [TagName]
```

# Tagging previous commits

Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_tagging_later>

Get the `commit checksum` of the commit you want to tag.
You can use `git log --pretty=oneline` to see recent commits.
You need to just add the `commit checksum` to the end (seems to be at least 4 characters if that makes it unique)

```sh
git tag -a [TagName] [CommitChecksum]
```

For Example

```sh
git tag -a v1.2 9fceb02
```

# Pushing Tags to Remote

Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_sharing_tags>

```sh
git push --tags
```

# Deleting Tags

Source: <https://stackoverflow.com/questions/5480258/how-can-i-delete-a-remote-tag>
Source: <https://git-scm.com/book/en/v2/Git-Basics-Tagging#_deleting_tags>

To delete locally use

```sh
git tag --delete [TagName]
```

To delete on the remote use

```sh
git push origin --delete [TagName]
```
