+++
title="Formatting"
date=2023-11-06
updated = 2023-11-08
extra = { series = "git" }
taxonomies = { tags = ["git"] }
+++

# Foreword

Source: <https://git-scm.com/docs/pretty-formats#Documentation/pretty-formats.txt-emnem>

Used to control output for commands like `log`.

# Example

For example to see the last committed date of a file use the following. The `-1` means return only the most recent.\
NB: Your current directory should be within the repo. Command originally found on [SO](https://stackoverflow.com/questions/8611486/how-to-get-the-last-commit-date-for-a-bunch-of-files-in-git) but link to formatting options was broken so hence this page.

```sh
git log -1 --format=%cd filename.txt
```

# Excerpt from placeholder options

| placeholder | Description                                                                   |
| :---------- | :---------------------------------------------------------------------------- |
| %n          | newline                                                                       |
| %%          | a raw %                                                                       |
| %H          | commit hash                                                                   |
| %h          | abbreviated commit hash                                                       |
| %an         | author name                                                                   |
| %cn         | committer name                                                                |
| %s          | subject                                                                       |
| %b          | body                                                                          |
| %cd         | committer date (format respects --date= option)                               |
| %cD         | committer date, RFC2822 style                                                 |
| %cr         | committer date, relative                                                      |
| %ct         | committer date, UNIX timestamp                                                |
| %ci         | committer date, ISO 8601-like format                                          |
| %cI         | committer date, strict ISO 8601 format                                        |
| %cs         | committer date, short format (YYYY-MM-DD)                                     |
| %ch         | committer date, human style (like the --date=human option of git-rev-list[1]) |
