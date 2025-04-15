+++
title="Set permissions recursively on directory structure"
date = 2022-06-02
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Source: <https://superuser.com/questions/91935/how-to-recursively-chmod-all-directories-except-files>

## For directories

```sh
find /path/to/base/dir -type d -print0 | xargs -0 chmod 755
```

## For Files

```sh
find /path/to/base/dir -type f -print0 | xargs -0 chmod 644
```
