+++
title="Codespaces"
date=2023-11-05
updated = 2024-01-08
+++

# Setup from default for Rust

Will try to turn this into a template when I have time but for now documenting the changes I need to make every time.

1. [Install rust](@/rust/install.md#installation)
   ```sh
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

<!-- TODO: vscode plugins - Create a script to automate install of plugins https://superuser.com/questions/1080682/how-do-i-back-up-my-vs-code-settings-and-list-of-installed-extensions -->

2. vscode plugin names (for more that might be useful see [full list](@/vscode/extensions_rust.md))
   1. `vadimcn.vscode-lldb`
   2. `rust-lang.rust-analyzer`
   3. `usernamehw.errorlens`
   4. `streetsidesoftware.code-spell-checker`
   5. `mhutchie.git-graph`
   6. `eamodio.gitlens`

# Pricing

By default you cannot perform actions that would result in billing according the [GitHub Docs](https://docs.github.com/en/codespaces/overview#billing-for-codespaces).

Go to [settings](https://github.com/settings/billing/summary) to see your usage.

# See list of your code spaces

<https://github.com/codespaces/>
