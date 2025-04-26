+++
title="View User Permissions"
date = 2022-09-21
updated = 2025-04-26
extra = { series = "SQL" }
taxonomies = { tags = ["SQL"] }
+++

```sql
select user, host from mysql.user;
SHOW GRANTS FOR 'newuser';
SHOW GRANTS FOR 'newuser'@'192.168.1.5';
```
