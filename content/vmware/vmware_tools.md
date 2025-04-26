+++
title='VMware Tools'
date = 2023-08-23
updated = 2025-04-26
extra = { series = "VMware" }
taxonomies = { tags = ["VMware"] }
+++

# Install from Repo

Tested on Ubuntu 18.04 (2022-12-02)

When trying the [other instructions](#install-from-vmware-cd) I got a message prompt encouraging me to use the package
for my OS. Which I did and it seems to have worked without issue (The message in the browser saying VMTools is not
installed went away). Only required one command as below.

```sh
sudo apt install open-vm-tools
```

# Install From VMWare CD

Tested on Ubuntu 22.04 (2022-09-20)

Source: <https://knowledge.broadcom.com/external/article?legacyId=1022525>

NB: Main thing reason for creating documentation was to note that the error message `Segmentation Fault (core dumped)`
is normal, and it should be ignored.

## Mount CD Image

**Virtual Machine** > **Install VMware Tools**

## Extract installation files

- Navigate to the CD
- Copy the file similar to `VMwareTools.x.x.x-xxxx.tar.gz` to the desktop
- Extract the contents of the `VMwareTools.x.x.x-xxxx.tar.gz` file

## Run installation

Navigate into the extracted folder `vmware-tools-distrib` and run the installer:

```sh
sudo ./vmware-install.pl
```

Take the defaults and ignore the error message about the `Segmentation Fault (core dumped)` it takes a while but the
installation continues.
