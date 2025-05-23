+++
title="Blacklist Module"
date = 2022-08-19
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

Source: <https://superuser.com/questions/575887/how-to-disable-device-in-linux-debian-wheezy>

In all commands replace `<modulename>` with the actual module name

1. Create a file

```sh
sudo nano /etc/modprobe.d/<modulename>.conf
```

containing the following

```
blacklist <modulename>
```

2. Run

```sh
sudo depmod -ae
```

3. Recreate your initrd

```sh
update-initramfs -u
```
