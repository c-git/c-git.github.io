+++
title="Codespaces"
date=2023-11-05
updated = 2025-01-23
extra = { series = "github" }
taxonomies = { tags = ["github"] }
+++

# Setup from default for Rust

These are my custom setups if you just want rust only see the [rust website](https://www.rust-lang.org/tools/install).

Feel free to download the scripts to review to decide if you want to use them. They are pretty simple.

## Install Rust only

[Download Script](https://dev.chester.wykies.com/github/codespaces/scripts/setup_rust_only.sh)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://dev.chester.wykies.com/github/codespaces/scripts/setup_rust_only.sh | sh
```

## Install Rust with Trunk (Usually only needed if your developing for the web)

**WARNING:** I'm aware of errors when using this version of the script but haven't had the time to resolve them, for now I recommend using the rust only script and installing trunk separately

[Download Script](https://dev.chester.wykies.com/github/codespaces/scripts/setup_with_trunk.sh)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://dev.chester.wykies.com/github/codespaces/scripts/setup_with_trunk.sh | bash
```

## Loading rust into your environment

At this point you'll need to either restart you terminal or run one of the following commands recommended but the rust install script (note the leading DOT):

```sh
. "$HOME/.cargo/env"            # For sh/bash/zsh/ash/dash/pdksh
source "$HOME/.cargo/env.fish"  # For fish
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
