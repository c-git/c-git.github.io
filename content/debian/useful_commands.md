+++
title="Useful commands"
date = 2023-10-19
updated = 2023-11-16
+++

## Consume CPU resources

```sh
cat /dev/zero > /dev/null
```

## Check which shells are available

```sh
cat /etc/shells
```

## Show largest folder/files

```sh
du -a -BM . | sort -n -r | head -n 30
```

## Set environment variables in bash

```sh
export VAR=abc
```

## Check what type of file something probably is

```sh
file
```

## Search for a file/folder

```sh
find -name "PATTERN"
```

## Show command history

```sh
history
```

## Show IP Addresses

```sh
ip -c a
```

## Show default gateway and routes

Source: <https://www.rootusers.com/how-to-display-routing-table-in-linux/>

```sh
ip -c r
```

## See installed kernels

```sh
find /boot/vmli*
```

## Consumes RAM (And CPU)

```sh
memtester
```

## Show network devices

```sh
nmcli device status
```

## Check which shell is in use

```sh
ps -p $$
```

## Get SHA1 hash of a file

```sh
sha1sum
```

## Start Discord Minimized

```sh
snap run discord --start-minimized
```

## Get file "properties"

```sh
stat
```

## Check system to see which sensors are available

```sh
sudo sensors-detect
```

## See bluetooth logs

```sh
sudo systemctl status bluetooth
```

## Get a checksum for a file

Source: <https://www.baeldung.com/linux/sha-256-from-command-line>

The source also shows how to verify against the checksum file

```sh
sha256sum my_file.txt
```

```sh
sum my_file.txt
```

## Get checksum for a string

```sh
echo string | sha256sum
```

## Move files to trash from command line

```sh
trash
```

## Check version of linux in use

```sh
uname -a
```

## See power status for connected devices

```sh
upower --dump
```

## Watch the sensor stream

```sh
watch sensors
```
