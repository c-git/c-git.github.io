+++
title="Mounting Drives"
date = 2022-12-03
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# Mounting a second hard drive

Source: <https://help.ubuntu.com/community/Fstab>

- Identify the drive. You're typically looking for sdb but try to also use the size to confirm you found the one that
  you are looking for.

```sh
lsblk
```

- Then get the UUID for the drive, using of the two following commands. I prefer the 2nd

```sh
sudo blkid
ls -l /dev/disk/by-uuid
```

- Backup fstab

```sh
cp /etc/fstab ~/
```

- Open fstab to edit

```sh
sudo nano /etc/fstab
```

- Add a line similar to the following replacing the UUID as needed

```
UUID=893bbb49-460a-469d-ae61-0ecf1a88c54e /home/administrator/data/    ext4    auto    0       2
```

- Drive should mount automatically next reboot. To mount right away use the following command

```sh
sudo mount -a
```

- To verify if the drive is mounted you can use `lsblk` again and look at the right column
