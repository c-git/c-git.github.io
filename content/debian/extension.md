+++
title="Extensions"
date = 2023-06-28
updated = 2023-11-08
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# List of useful extensions

- [Timer++](https://extensions.gnome.org/extension/1238/time/)
- [gTile](https://extensions.gnome.org/extension/28/gtile/)
- [Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)
- [Freon](https://extensions.gnome.org/extension/841/freon/)

# Manual install process

Source: <https://www.debugpoint.com/2021/10/manual-installation-gnome-extension/>

## Install gnome-shell-extensions

Required to manage and activate the new extensions

```sh
sudo apt install gnome-shell-extensions
```

## Steps

1. Go to official GNOME Extension website <https://extensions.gnome.org/>
2. Choose your extension, then download for your GNOME version.
3. Extract/unzip the files.
4. Copy the entire folder to

```sh
~/.local/share/gnome-shell/extensions
```

5. Open the `metadata.json` using a text editor (found inside the folder you just copied).
6. Copy the **uuid** field and rename the extension folder with this **uuid**.
   This is required to GNOME to identify the Extension.
7. The restart gnome, log off and back on is enough.
