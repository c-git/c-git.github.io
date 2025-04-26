+++
title="Redirecting stderr"
date = 2023-06-19
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

Source: <https://askubuntu.com/questions/625224/how-to-redirect-stderr-to-a-file>

# Redirect both stdout and stderr

NB: Only supported in some shells including bash

```sh
command &> out.txt
```

# Redirect stderr to stdout

```sh
command >out 2>&1
```

# Redirect stderr to separate file

```sh
command > out.txt 2>error.txt
```
