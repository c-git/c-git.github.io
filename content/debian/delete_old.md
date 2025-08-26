+++
title = "Delete Old Files Automatically"
date = 2025-02-28
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
updated = 2025-08-26
+++

# Explanation

Source: <https://stackoverflow.com/questions/45838304/bash-delete-files-older-than-3-months>

Before you actually run the delete command it might be good to use `-print` as below to see what will be deleted.
In both commands (the print and delete one):

- `PATH` should be replaced with the path to the folder you want to do the deletes in.
- `DAYS` should be replaced with the number of days you need.

See also [cron](@/debian/cron.md) for automating the command

# Preview output via print

Format:

```sh
find PATH -mtime DAYS -type f -print
```

Example

```sh
find . -mtime +90 -type f -print
```

# Actual delete command

```sh
find PATH -mtime DAYS -type f -delete
```
