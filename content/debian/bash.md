+++
title="bash"
date = 2023-10-04
updated = 2023-11-24
aliases=["/debian/bash-alias"]
+++

# Set script to exit on errors

Source: <https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html>

```bash
set -e
```

# See command that will execute when alias is used

Source: <https://askubuntu.com/questions/102093/how-to-see-the-command-attached-to-a-bash-alias>

```sh
type -a <cmd>
```

`-a`display all locations containing an executable named NAME; includes aliases, builtins, and functions.

where `<cmd>` is the command or alias you want information on
