+++
title="Updating"
date = 2023-10-19
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# Update and Upgrade

Useful when running on servers

```sh
sudo apt update && sudo apt upgrade
```

# Note on difference between `apt` and `apt-get`

Based on this page on [IT'S FOSS][foss] the apt versions of these are probably better.

# Update package list

```sh
sudo apt update
```

# Update packages and kernel

Source: <https://www.cyberciti.biz/faq/upgrade-update-ubuntu-using-terminal/>

Tested and this command did do the update for the pending kernel update.

```sh
sudo apt upgrade
```

# Recommended command for kernel update

Tested and just `sudo apt upgrade` also updated the kernel

Sources:

- <https://phoenixnap.com/kb/how-to-update-kernel-ubuntu>
- [FOSS Page on apt vs apt-get][foss]

```sh
sudo apt full-upgrade
```

[foss]: https://itsfoss.com/apt-vs-apt-get-difference/
