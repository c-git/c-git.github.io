+++
title = "Terminal"
date = 2024-01-14
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# Changing terminal title

Source: <https://askubuntu.com/questions/22413/how-to-change-gnome-terminal-title>

I moved to zsh from bash and zsh doesn't show the working directory in prompt (by default, I haven't done any customizing yet).
It keeps it short which is cool but makes it harder to figure out what the terminal is for.
So looked up how to change the title and found the above post (listed as source).
It works without any issues in zsh but the posts speaks about disabling the changes in the default `.bashrc`. The line related to `PS1`.

```sh
echo -ne "\033]0;SOME TITLE HERE\007"
```

Added the following to my `.zshrc` so I can just type `title SOME TITLE HERE`

```sh
# To make it easy to set the terminal title
title() { printf "\033]0;$*\007"; }
```
