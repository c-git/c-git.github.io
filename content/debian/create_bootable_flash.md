+++
title="Create Bootable Flash Drive"
date = 2023-07-27
updated = 2026-01-30
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

# Create via terminal

## Display List of Hard Drives

```sh
lsblk
```

## Copy ISO onto a flash drive

TIP: Before executing the command below you may want to format the disk but not create a volume.
I didn't format it once and it wrote to "cache" and I had a very hard time knowing when it was done actually writing to the drive.
I tried safely remove be eventually just gave up and pulled the drive out and then formatted it so the command returning would better sync with completion of copy.

**WARNING: Be very careful not to copy to root drive**\
_NB: Takes a while with no feedback, until fail/pass_

```sh
cp debian.iso /dev/sdX
```

# Create via GUI

Ubuntu has instructions on [their website](https://documentation.ubuntu.com/desktop/en/latest/tutorial/install-ubuntu-desktop/), which I've tried up to the part of loading onto the flash drive.

Relevant section copied below in case their site "goes away" (or gets relocated or reorganized or restructured or otherwise cannot be found anymore).

> 1. Open the Disks application. You can find it in the applications menu or by searching for “Disks”.
> 2. Insert your USB stick. It appears in the sidebar. Select it there.\
   > **WARNING: Make sure to select the USB stick and not the disk with your running system. Both are listed.**\
   > ![Screenshot of disk application](https://documentation.ubuntu.com/desktop/en/latest/_images/usb-in-gnome-disks.png)
> 3. Close all applications that access files or folders on the USB stick, including the file browser.
> 4. In the Disks window header, click `Drive Options (⋮)` and select `Restore Disk Image…`\
   > ![Screenshot of menu with "Restore Disk Image"](https://documentation.ubuntu.com/desktop/en/latest/_images/restore-disk-image-menu.png)
> 5. Next to `Image to Restore`, select the downloaded Ubuntu image file.
> 6. Click `Start Restoring…` and confirm. The application asks for your password.\
   > ![Screenshot of prompt for starting restoration](https://documentation.ubuntu.com/desktop/en/latest/_images/restore-disk-image-dialog.png)
> 7. A progress bar appears while Disks is writing the image.\
   > ![Screenshot of progress bar](https://documentation.ubuntu.com/desktop/en/latest/_images/gnome-disks-restoring-image.png)
> 8. When the progress bar finishes, click `Eject this disk (⏏)`.\
   > ![Screenshot with eject highlighted](https://documentation.ubuntu.com/desktop/en/latest/_images/gnome-disks-finished-writing.png)
