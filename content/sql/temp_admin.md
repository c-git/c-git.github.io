+++
title= "Temp Admin"
date = 2022-09-21
updated = 2025-04-15
extra = { series = "sql" }
taxonomies = { tags = ["sql"] }
+++

```sql
mysql -u root -p
CREATE USER 'tempadmin'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'tempadmin'@'%';
flush privileges;
DROP USER 'tempadmin'@'%';
```
