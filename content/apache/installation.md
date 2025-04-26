+++
title='Installation'
date=2022-09-21
updated= 2025-04-26
extra = { series = "Apache" }
taxonomies = { tags = ["Apache"] }
+++

# Install

Install apache with php and required mods/plugins

```sh
sudo apt install apache2
sudo apt install php php-mysql libapache2-mod-php
```

# Restart Server

Restart is required to reload config, enable and disable modules

```sh
sudo systemctl restart apache2
```

NB: After testing don't forget to remove the default `index.html`
