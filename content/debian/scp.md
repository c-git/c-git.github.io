+++
title="SCP"
date = 2023-10-19
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# Transfer to remote server

```sh
scp src_file administrator@192.168.1.5:/home/administrator/
```

# Transfer from remote server

Note: full stop at end is required to copy to your present directory

```sh
scp administrator@192.168.1.5:/home/administrator/src_file .
```

# Multiple Files

Source: <https://stackoverflow.com/questions/16886179/scp-or-sftp-copy-multiple-files-with-single-command>

I kept getting `protocol error: filename does not match request` when I tried the option with spaces.
Only the option with `{}` worked for me but this is limited to bash on the end receiving it.

```sh
scp administrator@192.168.1.5:"{/home/administrator/src_file1,/home/administrator/src_file2}" .
```
