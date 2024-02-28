+++
title="Reset Root Password"
date = 2022-09-21
updated = 2024-02-28
aliases=["/debian/rest-root-password"]
+++

The following are the commands, followed by the log;

```sql
cd /etc/mysql/mysql.conf.d/
sudo cp mysqld.cnf mysqld.cnf.20191103
```

under [mysqld] add skip-grant-tables

```sql
sudo /etc/init.d/mysql stop
sudo /etc/init.d/mysql start
mysql
use mysql;
flush privileges;
SET PASSWORD FOR root@'localhost' = PASSWORD('newpwd');
quit
```

remove line added

```sql
sudo /etc/init.d/mysql stop
sudo /etc/init.d/mysql start
mysql -uroot -p
```

Full Log

```
admin@mysqlserver:~$ cd /etc/mysql/mysql.conf.d/
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo cp mysqld.cnf mysqld.cnf.20191103
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo cp mysqld.cnf mysqld.cnf.20191103
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo /etc/init.d/mysql stop
[ ok ] Stopping mysql (via systemctl): mysql.service.
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo /etc/init.d/mysql start
[ ok ] Starting mysql (via systemctl): mysql.service.
admin@mysqlserver:/etc/mysql/mysql.conf.d$ mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.27-0ubuntu0.18.04.1 (Ubuntu)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use mysql;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)

mysql> SET PASSWORD FOR root@'localhost' = PASSWORD('newpwd');
Query OK, 0 rows affected, 1 warning (0.00 sec)

mysql> quit
Bye
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo nano mysqld.cnf
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo /etc/init.d/mysql stop
[ ok ] Stopping mysql (via systemctl): mysql.service.
admin@mysqlserver:/etc/mysql/mysql.conf.d$ sudo /etc/init.d/mysql start
[ ok ] Starting mysql (via systemctl): mysql.service.
admin@mysqlserver:/etc/mysql/mysql.conf.d$ mysql -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.27-0ubuntu0.18.04.1 (Ubuntu)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```
