+++
title="Smartgit"
date = 2022-08-19
updated = 2023-11-08
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

## SSH Setup

1. Ensure key is created and stored in `~/.ssh`
2. Use git clone from the command line to add the target to the known hosts
3. Then smartgit should work without issue

## Add Menu Item

Source: <https://tutorialforlinux.com/2019/06/09/how-to-create-a-smartgit-linux-desktop-menu-launcher-easy-guide-2/>

```sh
sudo bin/smartgit/bin/add-menuitem.sh
```
