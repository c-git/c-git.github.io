+++
title='Install and Setup'
date = 2022-09-21
updated = 2025-04-26
extra = { series = "SQL" }
taxonomies = { tags = ["SQL"] }
+++

# Tested OS

This setup was done and tested on Ubuntu 22.04

Source: <https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04>

# Install MariaDB

```sh
sudo apt install mariadb-server
```

# Start

```sh
sudo systemctl start mysql.service
```

# Configure

As of July 2022 `mysql_secure_installation` will produce an error due how it
attempts connection. This error results in a loop.

## Open SQL command prompt

See instructions [here](@/sql/misc.md#without-password).

## Set root password

Replace `p@s$w0rD` by a suitable strong password.

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'p@s$w0rD';
```

## Close SQL command prompt

```
exit
```

You will no longer be able to access mysql using `sudo mysql`

# Run command to secure installation

Now secure the setup.
Run the command and follow the steps as appropriate.

```sh
sudo mysql_secure_installation
```
