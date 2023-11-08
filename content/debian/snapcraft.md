+++
title="Snapcraft"
date = 2022-09-07
updated = 2023-11-08
+++

# Snap Setup

## Install snap

```sh
sudo apt install snapd
sudo snap install core
```

## Add snap bin to path

Open `~/.bashrc` for editing

```sh
nano ~/.bashrc
```

Add the following lines to `.bashrc`

```
export PATH=$PATH:/snap/bin
```

# Reverting a bad upgrade

Source: <https://askubuntu.com/questions/1268615/snap-install-specific-old-version>

NB: Example commands use discord because that is one of the programs I was having the problem with at the time.
Short summary of problem is:
- Had issues with Notepad++
- Found out there were updates for 4 apps. 
  - Notepad++
  - Discord
  - Firefox
  - Indicator-sensors
- When I tried to update them Notepad++ told me that it was already updated
- After the update discord wouldn't run anymore
- Ran it from the command line and got 3 errors
  - First two where `Failed to load module "canberra-gtk-module"` but this happens even when it works
  - The other one was `Failed to generate minidump.Illegal instruction (core dumped)`
- After revert, it still gave the same errors
- Restarted and then it worked
- Tried to revert to 141 to recreate the problem to file a report but... It works now.. IDK.

## See versions available locally

```sh
snap list discord --all
```

Don't have the output from before I fixed it but this is what it shows after:

```
Name     Version  Rev  Tracking       Publisher     Notes
discord  0.0.19   138  latest/stable  snapcrafters  -
discord  0.0.19   141  latest/stable  snapcrafters  disabled
```

## Do revert

```sh
snap revert discord
```

## To go back to the version I reverted from

Search key: unrevert

Wanted to file an issue on the discord repo and wanted to report it while it was not working. 
Note 141 is the version that I had reverted from. PS It worked after the revert even after a restart.


```sh
snap revert --revision=141 discord
```

# Snap uninstall (remove)

Example on notepad++

```sh
sudo snap remove notepad-plus-plus
```

# Snap help

```sh
snap help
```

# Install snap applications

## Discord

```sh
sudo snap install discord
cp /var/lib/snapd/desktop/applications/discord_discord.desktop ~/.local/share/applications/
```

## PDF Mix Tool

```sh
sudo snap install pdfmixtool
cp /var/lib/snapd/desktop/applications/pdfmixtool_pdfmixtool.desktop ~/.local/share/applications/
```

## Notepad++

```sh
snap install notepad-plus-plus
cp /var/lib/snapd/desktop/applications/notepad-plus-plus_notepad-plus-plus.desktop  ~/.local/share/applications/
```
