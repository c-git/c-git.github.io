+++
title="View User Permissions"
date = 2022-09-21
updated = 2025-04-15
extra = { series = "sql" }
taxonomies = { tags = ["sql"] }
+++

```sql
select user, host from mysql.user;
SHOW GRANTS FOR 'newuser';
SHOW GRANTS FOR 'newuser'@'192.168.1.5';
```
