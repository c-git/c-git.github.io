+++
title="Users and Groups"
date = 2022-12-07
updated = 2023-11-08
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Source: <https://www.howtogeek.com/50787/add-a-user-to-a-group-or-second-group-on-linux/>

# Users

## Create a new user

```sh
sudo adduser username
```

## Make a user admin

```sh
sudo usermod -a -G sudo username
```

## List all users

```sh
id
cat /etc/passwd
```

## Delete user

```sh
sudo userdel username
```

## Prevent a user from showing in the list of users at the GUI logon prompt

Source: <https://linuxconfig.org/disabling-user-logins-to-linux-system>

Based on how the other system user that didn't show up worked and matched with the command found in the source link.

```sh
sudo usermod username -s /sbin/nologin
```

# Groups

## Create a group

```sh
sudo groupadd groupname
```

## Add user to a group

```sh
sudo usermod -a -G groupname username
```

## List all groups

```sh
groups
cat /etc/group
```
