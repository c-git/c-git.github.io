+++
title='Misc'
date = 2022-09-21
updated = 2023-11-08
+++

Source: <https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql>

# Open Command Prompt

## With password

```sh
mysql -u root -p
```

# Without password

```sh
sudo mysql
```

# Create Database

```
CREATE DATABASE database_name;
```

# Create user and grant all permissions on database

```
GRANT ALL PRIVILEGES ON database_name.* TO 'USERNAME'@'HOSTNAME' IDENTIFIED BY "Str0ngDBP@ssw0rd";
```

# Create New User

```
CREATE USER 'USERNAME'@'HOSTNAME' IDENTIFIED BY 'Str0ngDBP@ssw0rd';
```

# Rename or change users host address

```
RENAME USER 'USERNAME'@'localhost' TO 'USERNAME'@'HOSTNAME';
```

# Flush (Frees memory and makes changes take immediate effect)

```
FLUSH PRIVILEGES;
```

# Close sql command prompt

```
exit
```
