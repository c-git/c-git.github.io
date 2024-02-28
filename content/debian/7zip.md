+++
title = "7z encrypted file"
date = 2024-02-28
+++

Found an old `7z` file that was password protected and the UI `Extract Here` option wouldn't extract it for me. It said

> There was an error while extracting "file.7z"
> The archive header is encrypted, but currently not supported

Found an [SO question](https://askubuntu.com/questions/13474/how-do-i-extract-a-password-protected-7z-file) that a solution that worked for me.

Install tool `sudo apt install p7zip-full` then run `7z x file.7z`.
It prompted for the password and all was well.
