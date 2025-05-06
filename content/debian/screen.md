+++
title = "Screen Application"
date = 2025-05-06
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

Source: <https://linuxize.com/post/how-to-use-linux-screen/>

# Check if Installed

```sh
screen --version
```

# Installation command

```sh
sudo apt install screen
```

# Start session

## Unnamed

```sh
screen
```

## Named

Where `session_name` is the name of the session

```sh
screen -S session_name
```

# List sessions

```sh
screen -ls
```

# Reconnect to session

```sh
screen -r
```

# In session commands

- NB: Typing `exit` closes the screen.
- Both in the help and below all commands are **preceded by pressing** <kbd>Ctrl</kbd>+<kbd>a</kbd> then releasing both buttons.
  Eg. To disconnect You press <kbd>Ctrl</kbd>+<kbd>a</kbd> simultaneously then release both buttons then press <kbd>d</kbd> alone.
- In some versions the help commands are shown as either `^A` or `^A: a`. If it shows `^A` then you press <kbd>Ctrl</kbd>+<kbd>a</kbd>, however if it shows `^A a` you press only <kbd>a</kbd>.

## Detaching

<kbd> d </kbd>

## Help

<kbd> ? </kbd>

## Window List

Used to select open screens or know if your in a screen

<kbd> “ </kbd>

## Start up a new screen

<kbd> c </kbd>

## Rename current screen

<kbd> A </kbd>

## Kill current screen

<kbd> \ </kbd>

# Screen Config

First create or open screen config file

```sh
nano ~/.screenrc
```

Sample Config Contents

```
# Turn off the welcome message
startup_message off


# Disable visual bell
#vbell off


# Set scrollback buffer to 10000
defscrollback 10000


# Customize the status line
hardstatus alwayslastline
hardstatus string '%{= kG}[ %{G}%H %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %m-%d %{W}%c %{g}]'
```
