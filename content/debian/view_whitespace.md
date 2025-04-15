+++
title = "View Whitespace"
date = 2023-12-01
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
updated = 2025-04-15
+++

Source: <https://stackoverflow.com/questions/3569997/how-to-find-out-line-endings-in-a-text-file>

Using the `-A` flag with `cat` shows non-printing characters, including line endings.

```sh
cat -A file.txt
```

List of how some characters are represented:

- `^I` - Tab (\t)
- `^M` - Carriage Return (\r)
- `$` - Line Feed (\n) (Comes at the end of a line and didn't try a line without \n so they are the same for my use cases)
