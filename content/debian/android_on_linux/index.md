+++
title="Android Apps on Linux"
date = 2022-08-19
updated = 2023-11-08
+++

Source: <https://www.howtogeek.com/760044/how-to-run-android-apps-on-linux/>\
Supplemented by: <https://github.com/anbox/anbox/blob/master/docs/install.md> (proper install command)

```sh
snap install --devmode --edge anbox
sudo apt install wget curl lzip tar unzip squashfs-tools
wget https://raw.githubusercontent.com/geeks-r-us/anbox-playstore-installer/master/install-playstore.sh
sudo chmod +x install-playstore.sh
./install-playstore.sh
```

Then give "Google Play Service" and "Google Play Store" permissions

NB: A copy of the playstore install has been stored at [here](install-playstore.sh)
