+++
title='HTTPS Setup'
+++

# GENERATE KEYS

Preferably run these steps in a temp folder so file cleanup at the end will be easy.

## Create RSA key
```sh
openssl genrsa -out localhost.key 4096
```

## Create signing request
```sh
openssl req -new -key localhost.key -out localhost.csr
```

### Use the following as a guide to answer the questions asked:

Replace <<SERVER-NAME>> with the name of the server

You are about to be asked to enter information that will be incorporated  into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank\
For some fields there will be a default value,\
If you enter '.', the field will be left blank.\
-----\
Country Name (2 letter code) [AU]:**DM**\
State or Province Name (full name) [Some-State]:**.**\
Locality Name (eg, city) []:**.**\
Organization Name (eg, company) [Internet Widgits Pty Ltd]:**.**\
Organizational Unit Name (eg, section) []:**.**\
Common Name (e.g. server FQDN or YOUR name) []:**<<SERVER-NAME>>**\
Email Address []:\
\
Please enter the following 'extra' attributes\
to be sent with your certificate request\
A challenge password []:\
An optional company name []:\

## Self sign certificate

```sh
openssl x509 -req -days 9999 -in localhost.csr -signkey localhost.key -out localhost.crt
```


# ENABLE SSL on server

```sh
sudo a2enmod ssl
```

# UPDATE CONFIG FILE

Note these instruction assume that you are using the default configuration file named `000-default.conf`.

```sh
sudo nano /etc/apache2/sites-enabled/000-default.conf
```

## Expected default file before changes

See file linked [here](org/000-default.conf).

## Example of final output

See example of updated file [here](after/000-default.conf)

## Change port to 443 from 80

Change the line that looks like `<VirtualHost *:80>` to `<VirtualHost *:443>`

## Add SSL configs

Add the following lines between the opening `<VirtualHost *:443>` and closing `</VirtualHost>` tags.

```
SSLEngine on
SSLCertificateFile	/etc/ssl/certs/localhost.crt
SSLCertificateKeyFile	/etc/ssl/private/localhost.key
```

## Add redirect from HTTP

Add the following lines putting in the correct URL instead of `x.x.x.x`.

```
<VirtualHost *:80>
	Redirect permanent / https://x.x.x.x/
</VirtualHost>
```

# Place keys at path specified in config

```sh
sudo mv localhost.crt /etc/ssl/certs/localhost.crt
sudo mv localhost.key /etc/ssl/private/localhost.key
```

# Delete signing request

It is no longer needed as the key has already been signed

```sh
rm localhost.csr
```

# Set permissions to protect key

```sh
sudo chown root:root /etc/ssl/private/localhost.key
sudo chown root:root /etc/ssl/certs/localhost.crt
sudo chmod 400 /etc/ssl/private/localhost.key
sudo chmod 444 /etc/ssl/certs/localhost.crt
```

# Verify `ports.conf` matches

Open the current `ports.conf` on the server you are working on.

```sh
cat /etc/apache2/ports.conf
```

Compare against the one below which can be found as a text file [here](ports.conf).

```
# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default.conf

Listen 80

<IfModule ssl_module>
	Listen 443
</IfModule>

<IfModule mod_gnutls.c>
	Listen 443
</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

# Restart Apache

```sh
sudo /etc/init.d/apache2 restart
```
