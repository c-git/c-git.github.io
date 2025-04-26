+++
title="Useful commands"
date = 2023-10-19
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

## Find which package contains a particular file

```sh
apt-file
```

## Consume CPU resources

```sh
cat /dev/zero > /dev/null
```

## Check which shells are available

```sh
cat /etc/shells
```

## Go back to previous directory

```sh
cd -
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

## Kill a running process

Where `pid` is the process ID of the process to kill or

```sh
kill pid
```

or where `program` is the name of the program to kill (see more on pidof [here](@/debian/useful_commands.md#get-the-pid-s-of-a-process))

```sh
kill $(pidof program)
```

## Set static route

Where `192.168.0.0/16` is the network and mask you want to set the route for and `192.168.0.1` is the gateway (It auto detected the interface when I tried it.)

```sh
sudo ip route add 192.168.0.0/16 via 192.168.0.1
```

## Check route that will be used for address

Source: [Faster than Lime](https://youtu.be/jjKFXlFNR4E?si=ULJU9MzTkXQ3jcqg&t=235) - Use `ip route help` to see more info.

```sh
ip route get 8.8.8.8
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

## Get the PID(s) of a process

Where `program` is the name of the command that started the process (what that shows in the System Monitor)

```sh
pidof program
```

## Check which shell is in use

```sh
ps -p $$
```

## Get SHA1 hash of a file

```sh
sha1sum
```

## Get SHA256 hash of a file

```sh
sha256sum
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

## Manage TexLive Packages

Was already installed on my system not sure from where or when.
However it was a very old version and after I set it up for use using `tlmgr init-usertree` (required for debian).
I tested it using `tlmgr info algorithm` and got the following:

```
tlmgr: Local TeX Live (2021) is older than remote repository (2024).
Cross release updates are only supported with
  update-tlmgr-latest(.sh/.exe) --update
See https://tug.org/texlive/upgrade.html for details.
```

Given than the new install was going to be over 7GB I abandoned this option.

```sh
tlmgr
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
