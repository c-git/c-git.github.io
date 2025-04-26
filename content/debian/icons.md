+++
title="Set Icon for Application"
date = 2023-04-03
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

Source: <https://www.solvetechnow.com/post/how-to-change-app-icon-in-ubuntu>

1. Get a preferably square image with a transparent background.Save it somewhere to be used. NB: png supports transparent backgrounds. See [instructions](@/gimp/transparent.md) if you need to make one from a screen shot.
2. Check if the .desktop file already exists
   ```sh
   ll /usr/share/applications | grep <program-name>
   ```
3. Create or edit the file (requires root)
   1. If the file does not exist the copy one of the other files in that folder to create it (will need to edit more than just the icon in this case).
   2. Open file in for editing
      ```sh
      sudo gedit /usr/share/applications/<program-name>.desktop
      ```

4. Edit that line that starts with `Icon=` to point to the file you saved
