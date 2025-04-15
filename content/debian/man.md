+++
title = "MAN"
date = 2023-12-17
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Man pages are great but sometimes you want to access it from outside of the terminal.
If you just pipe the output to a file it is very wide.
If it's too wide for your use case pipe it to cat, that will cause the whole thing to be printed but still fit on your current terminal which might be a better width for your use case.

# Example

NB: The example uses shows how to do it for `ufw`.
Just replace `ufw` with the program you want a man page for.

```sh
man ufw | cat
```
