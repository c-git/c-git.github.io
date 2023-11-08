+++
title="MAC Address Change"
date = 2022-06-02
updated = 2023-11-08
+++

Source: <https://itsfoss.com/change-mac-address-linux/>

*NB: Not tested*

In the instructions `enp0s31f6` is the adapter name

## Record the current mac address

Use the following command to document the current mac address

```sh
ip link show enp0s31f6
```

## Set new mac address and verify

Be sure to replace `XX:XX:XX:XX:XX:XX` with the new mac address

```sh
sudo ip link set dev enp0s31f6 down
sudo ip link set dev enp0s31f6 address XX:XX:XX:XX:XX:XX
sudo ip link set dev enp0s31f6 up
ip link show enp0s31f6
```