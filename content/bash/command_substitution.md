+++
title = "Command Substitution"
date = 2023-12-29
extra = { series = "bash" }
taxonomies = { tags = ["bash"] }
updated = 2025-04-15
+++

Source: <http://mywiki.wooledge.org/CommandSubstitution>

Inserts the output of one command into another command.

```sh
echo $(pwd)
```

Example Output: `/home/user`

NB: Older shells seemed to have only supported \` but `$()` is [preferred](http://mywiki.wooledge.org/BashFAQ/082).
