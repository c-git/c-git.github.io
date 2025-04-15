+++
title = "PPP logs"
date = 2023-12-06
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
updated = 2025-04-15
+++

Source: <https://askubuntu.com/questions/441900/where-is-the-log-of-pppd-in-ubuntu-13-10>

# All logs related to ppp

```sh
cat /var/log/syslog | grep ppp
```

# Line with duration of connection before reset

We were getting our connection reset periodically so this allowed us to check how long the period was

```sh
cat /var/log/syslog | grep "ppp.* active_time"
```
