+++
title="GitHub"
date = 2023-11-06
updated = 2023-11-08
+++

# Creating SSH Key (Linux)

Source: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

- Open a terminal
- `ssh-keygen -t ed25519 -C ""`
- Save to the default location
- Enter and confirm a suitable passphrase
- Go to [GitHub new SSH key page](https://github.com/settings/ssh/new)
  - `Title` is not important it's more like a note to remember where they key is used. So you could use for example
    the last octet of the server's IP.
  - Leave `Key type` on `Authentication Key`
  - For `Key` copy the value from the public key you just generated
    - `cat ~/.ssh/id_ed25519.pub`
    - Copy the line that is output into the text box on GitHub
  - Click `Add SSH Key`
