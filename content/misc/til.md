+++
title = "Today I Learned (TIL)"
date = 2024-01-12
updated = 2024-06-21
+++

**Foreword**: I didn't always learn the thing at that time but that's when something caused me to say you know what I should write this down.
That could be I've told it to people often so maybe writing it down will help someone.
And maybe that someone is me after a period of time when I forget it (or at least don't have it in mind and am reminded, possibly after wasting a lot of time in the process).

# Function length

Keep your functions short.

- There are times violating this rule is the right thing to do but if the function is so long that all of the function can't fit on your screen you better not be tired so you can remember the context of the part you can't see.
- It also makes coming back to the code later harder as you need to try work with a bigger context window.
- It also tends to encourage functions that have more than one responsibility.

# Deleting files on linux

Deleting a folder does not kick out any terminals in that folder.
Technically I didn't learn that today but I experienced it for the first time today.
I think presenting this one as a narrative may prove more entertaining and less like random fairly useless knowledge.

<details>
  <summary>Click to expand!</summary>

It all started with me trying to create a new [egui](https://www.egui.rs/) project.
I decided to use [my template](https://github.com/c-git/my_egui_template/tree/main) which I wrote a setup script for.
The sequence of events went like this:

- In vscode use `Open folder...` to create a folder (using the open dialog) and open that folder.
- Open the built in terminal
- Realize I would prefer use a separate terminal (Open one from vscode, because it opens in the correct folder)
- Navigate up one folder and use the [trash](https://manpages.ubuntu.com/manpages/jammy/en/man1/trash.1.html) program to remove the current folder.
- Use the template setup tool to create a new folder.
- In the built in terminal I saw no files when I did `ll`
- Did a `cd ..` then went back in and `ll` now showed the files.

I'd done a few `pwd` in between to make sure I was in the folder I expected because zsh doesn't show the folder in the prompt.
At first I couldn't understand what had happened then realized I was still in the folder but that folder was in the trash and thus was still a "valid" folder but not the same as the one I wanted to use even though `pwd` had the same output.

## Steps to reproduce

To keep it simple, I'll just demonstrate using two terminal windows

### Known assumptions

- Both terminals in the same working director
- `ll` = `ls` with some args as is default on Ubuntu.
- `trash` program is installed (`sudo apt install trash-cli`)

From Terminal 1

```sh
mkdir folder && cd folder && pwd && ll
touch apple && ll
```

From Terminal 2

```sh
trash folder
mkdir && cd folder && pwd && ll
touch bob && ll
```

From Terminal 1 (now in the original `folder` that is in the trash still sees the same output for `pwd` and `ll`)

```sh
touch charlie
pwd
ll
```

From Terminal 2 in the "new" `folder` shows the new contents (bob)

```sh
pwd
ll
```

If you use `rm -r folder` instead of trash you can no longer add any files in terminal 1 after that command and the output of `ll` only shows `Total 0`.

</details>

# Share by default

Often making something shared makes it easier for you to access from more places.
Not everything should be made public and once you do you can't always take it back but double check before you assume it needs to be private.
Even if no one else uses it, you might be making it easier for yourself at least.
(Kinda what this site is about...)
