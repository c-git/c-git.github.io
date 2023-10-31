+++
title='Bash Aliases'
+++

In a bash shell there is a special file provided for creating aliases to avoid directly editing your `.bashrc` logon script.
This file is called `.bash_aliases` and is automatically imported `.bashrc` on startup of a new shell.
The format of an alias is:

```sh
alias text_to_be_typed='command to be executed'
```

The `'` are only needed if the command has spaces.
