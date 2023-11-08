+++
title="SCP"
date = 2023-10-19
updated = 2023-11-08
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
