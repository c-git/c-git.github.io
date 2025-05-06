+++
title = "Set IP"
date = 2025-05-06
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

# Set static IP from CLI on Ubuntu Server 18

Source: <https://www.techrepublic.com/article/how-to-configure-a-static-ip-address-in-ubuntu-server-18-04/>

## Foreword

If editing the flat file isn’t working then check out if there is a netplan config folder.
If there is then that’s likely the way it is being managed.
If it’s not this still may not be the way (doesn't always work).

## Check what configuration files are present

```sh
ls /etc/netplan
```

If there are none present, proceed to create one, otherwise edit the existing one.
Expectation is that the folder exists but not necessarily the file.
If the folder doesn’t exist then likely this is not the way to do it.

## Edit configuration file as needed

### Open config file

NB: `00-installer-config.yaml` is the name of the config file in the example below

```sh
sudo nano /etc/netplan/00-installer-config.yaml
```

### Sample config file

```yml
# This is the network config written by 'subiquity'
network:
  ethernets:
    ens160:
      addresses:
        - 192.168.1.5/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 192.168.1.1
  version: 2
```

## Apply Changes

### Normal

```sh
sudo netplan apply
```

### Debug

```sh
sudo netplan --debug apply
```

# Set static IP from CLI on Debian 10

Source: <https://linuxconfig.org/how-to-set-a-static-ip-address-on-debian-10-buster>

## Foreword

The source that this was taken from advises you to disable NetworkManager but if you are using a headless server this likely isn’t something you can do as it appears that it is already not in use.

## Install resolvconf (for dns, optional)

```sh
sudo apt install resolvconf
```

## Check what interfaces are configured using

NB: Make a note of which ones are available

```sh
ip a
```

or

```sh
ls /sys/class/net
```

Note where `ens192:` and `ens224:` are below.

```
ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default
qlen 1000
   link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   inet 127.0.0.1/8 scope host lo
      valid_lft forever preferred_lft forever
   inet6 ::1/128 scope host
      valid_lft forever preferred_lft forever
2: ens192: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group
default qlen 1000
   link/ether 00:0c:29:b5:2d:0d brd ff:ff:ff:ff:ff:ff
   inet 172.20.1.26/16 brd 172.20.255.255 scope global ens192
      valid_lft forever preferred_lft forever
   inet6 fe80::20c:29ff:feb5:2d0d/64 scope link
      valid_lft forever preferred_lft forever
3: ens224: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen
1000
   link/ether 00:0c:29:b5:2d:17 brd ff:ff:ff:ff:ff:ff
```

## Edit Config

### Backup Existing Config

```sh
cp /etc/network/interfaces ~/interfaces.old
```

### Update config

Source: <https://wiki.debian.org/NetworkConfiguration>

Edit `/etc/network/interfaces` to set the configuration.
NB: Indented lines use tab. Edit file as needed.
**NB: ENSURE YOU INCLUDE THE LINE WITH AUTO - THAT CONTROLS WHICH INTERFACES ARE STARTED ON BOOTUP AND RESTART OF THE SERVICE.**
Alternatively you can bring up single interfaces using `ifup` after you edit the file without restarting the service.
More info can also be found on the man page: `man interface`

```sh
sudo nano /etc/network/interfaces
```

**See sample file below**

```
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
source /etc/network/interfaces.d/*
# The loopback network interface
auto lo
iface lo inet loopback
# The primary network interface
auto ens192
allow-hotplug ens192
iface ens192 inet static
     address 172.20.1.26/16
     gateway 172.20.1.1
     # dns-* options are implemented by the resolvconf package, if installed
     dns-nameservers 172.20.1.1
# The secondary network interface
auto ens224
allow-hotplug ens224
iface ens224 inet static
     address 10.140.209.237/24
     dns-nameservers 10.140.209.10
```

## Restart Services or Just bring up the new interface

```sh
sudo systemctl restart networking
sudo systemctl restart resolvconf
```

or use the `ifup` command to just bring up the interface edited.
Example:

```sh
sudo ifup ens224
```
