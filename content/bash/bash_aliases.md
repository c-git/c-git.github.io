+++
title='Bash Aliases'
date=2022-08-22
updated= 2025-04-15
aliases=["/debian/bash-alias"]
extra = { series = "bash" }
taxonomies = { tags = ["bash"] }
+++

In a bash shell there is a special file provided for creating aliases to avoid directly editing your `.bashrc` logon script.
This file is called `.bash_aliases` and is automatically imported in `.bashrc` on startup of a new shell.

The format of an alias is:

```sh
alias text_to_be_typed='command to be executed'
```

The `'` are only needed if the command has spaces.

# See command that will execute when alias is used

Source: <https://askubuntu.com/questions/102093/how-to-see-the-command-attached-to-a-bash-alias>

```sh
type -a <cmd>
```

`-a` display all locations containing an executable named NAME; includes aliases, builtins, and functions.

where `<cmd>` is the command or alias you want information on

If using zsh you can also use the following

```sh
which <cmd>
```
