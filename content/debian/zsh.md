+++
title = "zsh"
date = 2024-02-23
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Sources:

- <https://itsfoss.com/zsh-ubuntu/>
- <https://askubuntu.com/questions/131823/how-to-make-zsh-the-default-shell>

# Steps to install on Ubuntu

Tested on Ubuntu 22.04

- Install zsh
  ```sh
  sudo apt install zsh
  ```
- Start zsh
  ```sh
  zsh
  ```
- Select 0 to create an empty config (This step didn't happen for me but I'm not sure why)
- Set zsh as default shell
  ```sh
  chsh -s $(which zsh)
  ```
- Check that it is set properly (Should show zsh at end of the line)
  ```sh
  grep $USER /etc/passwd
  ```
- Logout and log back in for settings to take effect
- After logging back in open a terminal and test with [this command](@/debian/useful_commands.md#check-which-shell-is-in-use) (Really probably not necessary the prompt looks different)
- For the equivalent of `.bashrc` see `.zshrc`
- To set terminal title see [my notes](@/debian/terminal.md#changing-terminal-title) on that
