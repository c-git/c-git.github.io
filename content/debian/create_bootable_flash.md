+++
title="Create Bootable Flash Drive"
date = 2023-07-27
updated = 2023-11-08
+++

### Display List of Hard Drives

```sh
lsblk
```

### Copy ISO onto a flash drive

TIP: Before executing the command below you may want to format the disk but not create a volume.
I didn't format it once and it wrote to "cache" and I had a very hard time knowing when it was done actually writing to the drive.
I tried safely remove be eventually just gave up and pulled the drive out and then formatted it so the command returning would better sync with completion of copy.

**WARNING: Be very careful not to copy to root drive** \
_NB: Takes a while with no feedback, until fail/pass_

```sh
cp debian.iso /dev/sdX
```