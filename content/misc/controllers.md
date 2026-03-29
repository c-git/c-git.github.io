+++
title = "Controllers"
date = 2024-02-20
taxonomies = { tags = ["Misc"] }
updated = 2026-03-29
+++

# PS4 Controller on Linux

On current versions of Ubuntu you don't need to install anything separate just pair the controller to be able to use it.
To put the controller into pair mode press and hold `Share` + `PS` buttons until the LED starts blinking rapidly.

<details>
    <summary>Controller IDs (personal notes)</summary>

    This is the easiest place to find it so saving here:
    - 46 - Gold
    - B5 - Black and blue (aftermarket)
    - CD - Black

</details>

<details>
    <summary>Instructions I found for older versions before I found out I didn't need them</summary>

Before I realized you didn't need any software there was a python tool I tried that gave some options that I found from this [video](https://youtu.be/LrpipgIH8Q8).
Summary of the instructions below

```sh
sudo apt install python3-pip
sudo pip install ds4drv
ds4drv
```

[Bluetooth dongle compatibility](https://github.com/chrippa/ds4drv/wiki/Bluetooth%20dongle%20compatibility)

Don't remember what this command was for but I saved it `ds4drv --hidraw`

</details>
