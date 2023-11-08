+++
title='PHP'
date = 2023-11-06
updated = 2023-11-08
+++

# Check current

```sh
php --version
```

# Install current version

See [apache](@/apache/installation.md) install instructions to see how to install the current version that is in the
default repos.

# Install multiple versions

Source: <https://www.youtube.com/watch?v=bHTv0FmvrTo>

- Before doing this process it is assumed that apache and the [current version](#install-current-version) of php is
  already installed.
- This approach only allows you to use one version at a time on the system.
- Tested on Ubuntu 22.04

## Install dependency

NB: Normally already installed

```sh
sudo apt install software-properties-common
```

## Add ppa for other versions

Previous step needed to ensure this command is available.

```sh
sudo add-apt-repository ppa:ondrej/php
```

## Install desired version

Replace 7.3 in the example with the version you are looking for

```sh
sudo apt install php7.3
```

# Select versions of PHP that are installed and available

## For Apache

Source: <https://serverfault.com/questions/149039/how-to-change-what-version-of-php-apache2-uses>

Example commands switch from 8.1 to 7.3

NB: Use of `tab` to autocomplete commands works and helped in ensuring I got the version numbers right.

### Disable current module

```sh
sudo a2dismod php8.1
```

### Enable replacement version

```sh
sudo a2enmod php7.3
```

### Install MySQL Module for PHP

Source: <https://zoomadmin.com/HowToInstall/UbuntuPackage/php-mysqli>

```sh
sudo apt-get install php7.3-mysql
```

### Restart Apache

See instructions on restarting apache [here](@/apache/installation.md#restart-server).

## For CLI

Will open a menu showing which are installed, and which one is active.

NB: `sudo` not needed to only view the list and see which is active.
`sudo` is only needed if you want to change the selection.

```sh
sudo update-alternatives --config php
```
