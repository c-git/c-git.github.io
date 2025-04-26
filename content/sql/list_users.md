+++
title="View List Of Users"
date = 2022-09-21
updated = 2025-04-26
extra = { series = "SQL" }
taxonomies = { tags = ["SQL"] }
+++

```sql
mysql> select host, user from mysql.user;
```

| host          | user               |
| ------------- | ------------------ |
| %             | inventory          |
| 192.168.1.5   | newuser            |
| localhost     | debian-sys-maint   |
| localhost     | mysql.session      |
| localhost     | mysql.sys          |
| localhost     | root               |
| ------------- | ------------------ |

6 rows in set (0.00 sec)
