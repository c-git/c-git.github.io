+++
title = "phpMyAdmin"
date = 2024-04-17
+++

I have XAMPP installed and wanted to document part of my config in case I have to setup again on a new computer.

Notable changes (that I remember) are:

- No auto login to the MySQL server.
- Added a second host which is the same computer but by IP, which I use to connect to MySQL running in docker images.

File found at: `/opt/lampp/phpmyadmin/config.inc.php`

```php
<?php
/**
 * phpMyAdmin sample configuration, you can use it as base for
 * manual configuration. For easier setup you can use setup/
 *
 * All directives are explained in documentation in the doc/ folder
 * or at <https://docs.phpmyadmin.net/>.
 */

/** 
 * This part has been truncated
 */

/**
 * Servers configuration
 */
$i = 0;

/**
 * First server
 */
$i++;
/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = '';
/* Server parameters */
//$cfg['Servers'][$i]['host'] = 'localhost';
$cfg['Servers'][$i]['compress'] = false;
$cfg['Servers'][$i]['AllowNoPassword'] = true;

/** 
 * This part has been truncated
 */

$i++;
$cfg['Servers'][$i]['host'] = '127.0.0.1'; //provide hostname and port if other than default
$cfg['Servers'][$i]['user'] = 'root';  
$cfg['Servers'][$i]['password'] = '';  
$cfg['Servers'][$i]['auth_type'] = 'cookie';


/**
 * End of servers configuration
 */

/** 
 * This part has been truncated
 */
```
