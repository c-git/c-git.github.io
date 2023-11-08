+++
title='Power'
date = 2022-08-19
updated = 2023-11-08
+++

# Set low battery notifications percentage

Source: <https://askubuntu.com/questions/1405846/set-low-battery-percentage-to-15-in-22-04>

Open the config

```sh
sudo nano /etc/UPower/UPower.conf
```

Change the following lines as needed

```
PercentageLow=20
PercentageCritical=5
PercentageAction=2
```

Restart the service

```sh
sudo systemctl restart upower
```