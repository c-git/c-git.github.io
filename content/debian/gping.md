+++
title="gping"
date = 2022-08-19
updated = 2023-11-08
+++

Source: <https://github.com/orf/gping>

```sh
echo "deb http://packages.azlux.fr/debian/ buster main" | sudo tee /etc/apt/sources.list.d/azlux.list
wget -qO - https://azlux.fr/repo.gpg.key | sudo apt-key add -
sudo apt update
sudo apt install gping
```
