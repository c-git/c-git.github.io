+++
title = "Controllers"
date = 2024-02-20
extra = { series = "misc" }
taxonomies = { tags = ["misc"] }
updated = 2025-04-15
+++

# PS4 Controller on Linux

On current versions of Ubuntu you don't need to install anything separate just pair the controller to be able to use it.
To put the controller into pair mode press and hold `Share` + `PS` buttons until the LED starts blinking rapidly.
Before I realized you didn't need any software there was a python tool I tried that gave some options that I found from this [video](https://youtu.be/LrpipgIH8Q8).
Summary of the instructions below

```sh
sudo apt install python3-pip
sudo pip install ds4drv
ds4drv
```

[Bluetooth dongle compatibility](https://github.com/chrippa/ds4drv/wiki/Bluetooth%20dongle%20compatibility)

Don't remember what this command was for but I saved it `ds4drv --hidraw`
