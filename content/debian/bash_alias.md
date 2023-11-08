+++
title="BASH Alias"
date = 2023-10-04
updated = 2023-11-08
+++

# See command that will execute when alias is used

Source: <https://askubuntu.com/questions/102093/how-to-see-the-command-attached-to-a-bash-alias>



```sh
type -a <cmd>
```

`-a`	display all locations containing an executable named NAME; includes aliases, builtins, and functions.

where `<cmd>` is the command or alias you want information on