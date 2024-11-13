+++
title = "Redirect Output"
date = 2024-11-13
+++

# stderr to stdout

Use `2>&1`

In the example without the redirect there is no output in vscode because `tar` requires arguments and instead prints to `stderr`

```sh
tar 2>&1 | code -
```

If sending to a file instead of piping `stdout` then redirect `stdout` first (the order the redirects are done in matters).
As it does the redirects from left to right as per [SA Question](https://stackoverflow.com/questions/876239/how-to-redirect-and-append-both-standard-output-and-standard-error-to-a-file-wit). (See excerpt below)

> `cmd >>file.txt 2>&1`\
> \
> Bash executes the redirects from left to right as follows:
>
> 1. `>>file.txt`: Open file.txt in append mode and redirect stdout there.
> 2. `2>&1`: Redirect stderr to "where stdout is currently going". In this case, that is a file opened in append mode. In other words, the &1 reuses the file descriptor which stdout currently uses.

```sh
tar >>file.txt 2>&1
```
