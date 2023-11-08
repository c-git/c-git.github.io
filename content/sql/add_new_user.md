+++
title="Add New User to Database"
date = 2022-09-21
updated = 2023-11-08
+++

(See sample log below)

```sql
mysql -u root -p
CREATE USER 'newuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'%';
flush privileges;
```

Log 1

```
admin@mysqlserver:/etc/mysql/mysql.conf.d$ mysql -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 6
Server version: 5.7.27-0ubuntu0.18.04.1 (Ubuntu)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE USER 'newuser'@'192.168.1.5' IDENTIFIED BY 'password_here';
Query OK, 0 rows affected (0.00 sec)

mysql> GRANT ALL PRIVILEGES ON newuser.* TO 'myuser'@'192.168.1.5';
Query OK, 0 rows affected (0.00 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)

mysql>
```

Log 2

```
mysql> CREATE USER 'newuser'@'192.168.1.5' IDENTIFIED BY 'password_here';
Query OK, 0 rows affected (0.08 sec)

mysql> GRANT SELECT ON fa.* TO 'newuser'@'192.168.1.5';
Query OK, 0 rows affected (0.00 sec)

mysql> GRANT SELECT ON parts.* TO 'newuser'@'192.168.1.5';
Query OK, 0 rows affected (0.00 sec)
```
