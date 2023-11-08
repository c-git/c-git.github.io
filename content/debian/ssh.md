+++
title='SSH'
date = 2023-10-19
updated = 2023-11-08
+++

# Install

```sh
sudo apt install ssh
```

# Whitelisting users

Source: <https://ostechnix.com/allow-deny-ssh-access-particular-user-group-linux/>

Open config

```sh
sudo nano /etc/ssh/sshd_config
```

At the bottom of the file add `AllowUsers` then a tab (or a space, based on my testing) then a list of users separated
by space
Other users will be blocked.

```
AllowUsers  user1 user2 user3
```

Then restart the service

```sh
sudo systemctl restart sshd
```

# Check fingerprint from server

Source: <https://askubuntu.com/questions/76337/where-is-the-ssh-server-fingerprint-generated-stored>

When connecting to the server you are asked to verify the fingerprint.
To get that fingerprint use the following command (may need to be modified if you are not using ED25519).

NB: Must be run on the server

```sh
ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
```
