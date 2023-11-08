+++
title='DNS'
date = 2022-12-02
updated = 2023-11-08
+++

Source: <https://www.howtouselinux.com/post/linux-command-use-dig-to-query-dns>

# See DNS Server set

Tested on Ubuntu 22.04 (Did not work on Ubuntu 18.04)

```sh
resolvectl status
```

# Dig notes

## Source of nameserver

Dig seems to get the default nameserver to use from `/etc/resolv.conf`.
This file in turn seems to default to the localhost.

## Dig from a specific name server

Use:

```sh
dig host @local-server
```

Where:

- host: is the host to look up
- local-server is the place to do the lookup
