+++
title='Installation'
+++

# Install

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
