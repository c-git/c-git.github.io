+++
title = "Background Commands"
date = 2024-03-03
updated = 2024-12-28
+++

Source: <https://askubuntu.com/questions/510811/what-is-the-difference-between-ctrl-z-and-ctrl-c-in-the-terminal>

Note: I found more info on `fg` in the man page for sh (see `man sh`).

We all end up pressing `Ctrl + Z` instead of `Ctrl + C` one day and not knowing what to do.
This isn't always a big deal unless the program that was running locked some resource you want to use.
Closing the terminal "fixes" it but that might be inconvenient.
What `Ctrl + Z` does is suspend the program instead of stopping it like `Ctrl + C`.
So it's not running but it's basically paused and in the background.

There are two commands you can use to control programs in the background `bg` and `fg`.
Didn't find any info on these programs from a cursory search. No man page for either and `--help` doesn't seem to be an argument.
The following is from my testing mostly using `ping` which still sends messages to the terminal even if it's running in the background.
To see if it is in the background I tried using another command like top.
From those test I concluded the following:

- `fg` - brings a suspended (or running in the background) program to the foreground
- `bg` - resumes a suspended program in the background (you can continue to use the terminal, with the background program possibly sending messages)
- `&` at the end of command seems to start a command and then put it to run in the background so `fg` can be used to bring it back to the foreground
