+++
title="pyenv"
date = 2022-08-19
updated = 2023-11-08
+++

## Check version of linux

```sh
uname -a
```

## Install prerequisites

Source: <https://github.com/pyenv/pyenv/wiki>

```sh
sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

## Run installer

Source: <https://github.com/pyenv/pyenv-installer>

```sh
curl https://pyenv.run | bash
```

## Update bashrc

Add the following lines to bashrc

```
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

## List versions available for install

Source: <https://realpython.com/intro-to-pyenv/#using-pyenv-to-install-python>

Can also be filtered with grep like in the example

```sh
pyenv install --list | grep " 3\.[678]"
```

## Install new version

Source: <https://github.com/pyenv/pyenv#usage>

```sh
pyenv install <version>
```