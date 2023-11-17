+++
title="services systemd (unit)"
date = 2023-09-23
updated = 2023-11-17
+++

Source: <https://linuxhandbook.com/create-systemd-services/>

# Sending output to a file

Source: <https://unix.stackexchange.com/questions/245037/saving-process-output-to-a-file-in-systemd-unit-file>

Commands are not subject to shell parsing eg "< > << >> and &" are not treated specially. Use `/bin/sh 'script.sh > out'` to get around this.

# Run as root

Example:

File should be saved at `etc/systemd/system/`

```sh
sudo nano /etc/systemd/system/SERVICE_NAME.service
```

Example Contents:

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

## Enabling system service

```sh
sudo systemctl daemon-reload
sudo systemctl enable SERVICE_NAME.service
```

# Run as user

File should be saved at `~/.config/systemd/user/`

This folder usually won't exist so create it.

```sh
mkdir -p ~/.config/systemd/user
```

Same file as for [root](@/debian/services.md#run-as-root) is required.

## Enabling system service

```sh
systemctl --user daemon-reload
systemctl --user enable SERVICE_NAME.service
```
