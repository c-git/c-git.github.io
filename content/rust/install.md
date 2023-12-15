+++
title="Install"
date=2022-12-07
updated= 2023-12-15
+++

# Linux (Debian)

Tested on Ubuntu 18.04 (2022-12-02)

Source: [rust-lang][1]

NB: It has come to my attention that cargo can also be installed from
the [debian repos](https://installati.one/debian/11/cargo/), however I have still decided to document the approach using
the script because it provides more flexibility to choose where cargo is installed.
Further it is recommended by [rust-lang][1] to use rustup and I did not find a package for rustup in the debian repos.
I've also become aware the cargo from the debian repos is usually outdated.

## Installation

Optional installations to make things go more smoothly (Maybe needed later). If these are done you shouldn't need to
install anything else after the command to install rust. (Not needed in GitHub Code Spaces)

```sh
sudo apt install curl build-essential pkg-config libssl-dev git
```

Install Rustup, cargo, rustc, etc... (Source: <https://www.rust-lang.org/tools/install>)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Packages Needed to compile some of our programs

Below is a list of errors and the package that fixes the error. Use as needed.

---

Error:

```
Could not find directory of OpenSSL installation, and this `-sys` crate cannot
  proceed without this knowledge.
```

Solution:

```sh
sudo apt install pkg-config libssl-dev
```

---

## Uninstall

```sh
rustup self uninstall
```

[1]: https://www.rust-lang.org/tools/install
