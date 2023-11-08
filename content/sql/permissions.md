+++
title="View User Permissions"
date = 2022-09-21
updated = 2023-11-08
+++

```sql
select user, host from mysql.user;
SHOW GRANTS FOR 'newuser';
SHOW GRANTS FOR 'newuser'@'192.168.1.5';
```
