+++
title="Codespaces"
date=2023-11-05
updated = 2024-01-11
+++

# Setup from default for Rust

The script files can be found in [this folder](scripts/) for review as needed.

## Install Rust only

```sh
curl --proto '=https' --tlsv1.2 -sSf https://c-git.github.io/github/codespaces/scripts/setup_rust_only.sh | sh
```

## Install Rust with Trunk (Usually only needed if your developing for the web)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://c-git.github.io/github/codespaces/scripts/setup_with_trunk.sh | bash
```

At this point you'll need to either restart you terminal or source the cargo setup script manually.

```sh
source "$HOME/.cargo/env"
```

It's probably a good idea to ensure the OS is up to date.
Depending on what you're doing this may not matter for example just navigating code and not running anything (This is my opinion I haven't though long enough about this to be sure).

```sh
sudo apt update && sudo apt upgrade
```

# Use devcontainer

I found [this post](https://containers.dev/guide/dockerfile) helpful to get an idea of the options available.

I also found a repo microsoft with pre-configured dev containers <https://github.com/devcontainers/images/tree/main/src/rust>

Seems to work by copying all the files from `.devcontainer` into the root of your repo and then when a codespace is request to be created it uses those files.
It takes a lot longer with not much visual feedback but seems to have worked.
Would need to be customized to also install trunk when needed.
For now I will just work with my script as I have more control over it and I can see the progress as it goes.

# Pricing

By default you cannot perform actions that would result in billing according the [GitHub Docs](https://docs.github.com/en/codespaces/overview#billing-for-codespaces).

Go to [settings](https://github.com/settings/billing/summary) to see your usage.

# See list of your code spaces

<https://github.com/codespaces/>
