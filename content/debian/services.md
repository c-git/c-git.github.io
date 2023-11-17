+++
title="services systemd (unit)"
date = 2023-09-23
updated = 2023-11-17
+++

Source: [linuxhandbook]

# Sending output to a file

Source: <https://unix.stackexchange.com/questions/245037/saving-process-output-to-a-file-in-systemd-unit-file>

Commands are not subject to shell parsing eg "< > << >> and &" are not treated specially. Use `/bin/sh 'script.sh > out'` to get around this.

# File location

## If running as root user

File should be saved at `etc/systemd/system/`

```sh
sudo nano /etc/systemd/system/SERVICE_NAME.service
```

## If running as non-root user

File should be saved at `~/.config/systemd/user/` . Note that This folder usually won't exist so create it.

```sh
mkdir -p ~/.config/systemd/user
nano ~/.config/systemd/user/SERVICE_NAME.service
```

# Example Contents

This is the same for both. See the [linuxhandbook] for more info on what should be set in the file.
You can find a list of targets [here](https://www.freedesktop.org/software/systemd/man/latest/systemd.special.html).

```
[Unit]
Description=User Facing name of service
After=network.target

[Service]
ExecStart=/bin/bash -c '/usr/bin/my_awesome_program >> /home/user/out.txt 2>&1'
Type=simple
Restart=always

[Install]
WantedBy=default.target
```

# Enabling and starting the service

## If running as root user

```sh
sudo systemctl daemon-reload
sudo systemctl enable SERVICE_NAME.service
sudo systemctl start SERVICE_NAME
```

## If running as non-root user

```sh
systemctl --user daemon-reload
systemctl --user enable SERVICE_NAME.service
systemctl --user start SERVICE_NAME
```

# Updates to service config

This section applies if you've made changes to the service's configuration and want to apply those changes

## If running as root user

```sh
sudo systemctl daemon-reload
sudo systemctl restart SERVICE_NAME
```

## If running as non-root user

```sh
systemctl --user daemon-reload
systemctl --user restart SERVICE_NAME
```

[linuxhandbook]: https://linuxhandbook.com/create-systemd-services

# Removing Services

Source: <https://www.baeldung.com/linux/create-remove-systemd-services#1-removing-custom-systemd-services>

## If running as root user

```sh
sudo systemctl stop SERVICE_NAME
sudo systemctl disable SERVICE_NAME
sudo rm /etc/systemd/system/SERVICE_NAME.service
sudo systemctl daemon-reload
```

## If running as non-root user

```sh
systemctl --user stop SERVICE_NAME
systemctl --user disable SERVICE_NAME
rm ~/.config/systemd/user/SERVICE_NAME.service
systemctl --user daemon-reload
```
