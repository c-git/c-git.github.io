+++
title='Global Ignore'
date = 2022-09-10
updated = 2025-04-15
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

# Foreword

Instructions written for linux (not tested on Windows)

# Specify global ignore file

### Open git config file

It's ok if the file does not exist.
You can just create it.

Note: It is unlikely that the file does not exist
because mandatory settings like your name and email address go in the `user` section of that file.

```sh
nano ~/.gitconfig
```

## Create or find `core` section

It starts with the text `[core]`.
If section did not exist (or the file did not exist) then simply add that text.

Under that section add the following

```
excludesFile = ~/.gitignore_global
```

Final content (ignoring other settings) should look like

```
[core]
	excludesFile = ~/.gitignore_global
```

# Add entries to file

Use the normal git ignore format. More info on that can be found [here](https://git-scm.com/docs/gitignore#_pattern_format).

Add them to the file specified in the last step

```sh
nano ~/.gitignore_global
```
