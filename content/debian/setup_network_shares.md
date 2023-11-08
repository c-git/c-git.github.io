+++
title="Setup Network Shares"
date = 2022-12-03
updated = 2023-11-08
+++

# Install Samba

```sh
sudo apt-get install samba
```

# Configure Samba

- Backup Samba Config

```sh
sudo cp /etc/samba/smb.conf ~
```

- Create folder for share

```sh
mkdir ~\folder_to_share
```

- Edit config see pattern below of config file after you open it

```sh
sudo nano /etc/samba/smb.conf
```

- Restart samba for changes to take effect

```sh
sudo service smbd restart
```

# Permissions

**IMPORTANT**: ENSURE THE USER HAS PERMISSIONS TO ALL PARENT FOLDERS LEADING TO THE SHARED FOLDER.

Permissions are controlled using OS Users and Groups see [User and Groups](@/debian/users_and_groups.md) for
how to add
users and put them into groups. Typically, you'll want to use special purpose users that are not able to log in locally.
So set their logon password to something unusable like a random string of characters.

## Set samba password for a user

```sh
sudo smbpasswd -a user
```

## See users configured to use samba

Leave off `-v` if you do not want verbose output

```sh
sudo pdbedit -L -v
```
