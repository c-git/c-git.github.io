+++
title = "Firewall"
date = 2023-11-22
+++

Source: <https://ubuntu.com/server/docs/security-firewall>

# Man page extract

The man page is well written an easy to follow `man ufw`, see there for specifics.

> On installation, ufw is disabled with a default incoming policy of deny, a default forward
> policy of deny, and a default outgoing policy of allow, with stateful tracking for NEW
> connections for incoming and forwarded connections. In addition to the above, a default
> rule-set is put in place that does the following...

# State Information

## View rules in use (including status and defaults)

```sh
sudo ufw status verbose
```

## View rules in use (numbered)

Numbers make things like deleting rules easier

```sh
sudo ufw status numbered
```

## Logs

Source: <https://www.cyberciti.biz/faq/ubuntu-22-04-lts-set-up-ufw-firewall-in-5-minutes/>

```sh
tail -f /var/log/ufw.log
```

## Listening Programs

Excerpt from man page

> The listening report will display the ports on the live system in the listening state for tcp and the open state for udp, along with the address of the interface and the executable listening on the port. An '*' is used in place of the address of the interface when the executable is bound to all interfaces on that port. Following this information is a list of rules which may affect connections on this port. The rules are listed in the order they are evaluated by the kernel, and the first match wins. Please note that the default policy is not listed and tcp6 and udp6 are shown only if IPV6 is enabled.

```sh
sudo ufw show listening
```

## Services port number mapping

The named ports can be found in `/etc/services`

# Block outgoing traffic

**NOTE**: Not tested yet

Source: <https://askubuntu.com/questions/448836/how-do-i-with-ufw-deny-all-outgoing-ports-excepting-the-ones-i-need>
