+++
title = "sed"
date = 2024-01-27
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
updated = 2025-04-26
+++

Source: <https://www.linux.org/threads/why-i-love-sed-and-a-clear-practical-beginners-guide-to-using-it.43651/>

Excerpt from man page

> Sed is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline).
> While in some ways similar to an editor which permits scripted edits (such as ed), sed works by making only one pass over the input(s), and is consequently more efficient.
> But it is sed's ability to filter text in a pipeline which particularly distinguishes it from other types of editors.

# Things to keep in mind

- `sed` uses special characters differently from the shell so wrap the script part in single quotes
- More info about said can be found on the man page `man sed`
- Full manual using `info sed`
  > The full documentation for sed is maintained as a Texinfo manual. If the info and sed programs\
  > are properly installed at your site, the command\
  > \
  > `info sed`\
  > \
  > should give you access to the complete manual.

# Examples

## Simple word replace

- `-i` - Says to edit the file instead of sending output to stdout
- `s` - At start is for substitution
- `g` - At end says to replace all not just first per line
- If both `-i` and `source_file.txt` are left out it will read the "file" from stdin and output to stdout

```sh
sed -i 's/original_word/replacement_word/g' source_file.txt
```
