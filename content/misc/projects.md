+++
title = "Projects and Contributions"
date = 2024-09-24
updated = 2025-03-26
+++

# [log-viewer](https://github.com/c-git/log-viewer) (Rust)

> Simple log viewer for logs with json lines

I developed a simple log viewing application using [egui][egui].
It enables basic log file navigation.
There is an a version able to be run from the browser available [here](http://dev.chester.wykies.com/log-viewer/).
(See [sample log files](https://github.com/c-git/log-viewer/tree/main/tests/sample_logs))
It works on log files where each line is a json string.

<details>
    <summary>Click to see more</summary>

This project servers as an example for many things that I've learned to do in [egui][egui].

- It demonstrates how to "preserve empty space".
  By default [egui][egui] will shrink controls to the size of the content that they contain but I wanted the height of the bottom panel to stay the same size even when it had less content.
  That was accomplished using [a function](https://github.com/c-git/log-viewer/blob/3a2e82a65550dfd349b965fd36ffa7f74b129541/src/app.rs#L805) that allocates the rest of the space so that the control does not shrink.
  If using this example, take note of the `if` that comes before calling the function.
  Without the `if` the size of the control will grow instead of staying the same. (See exert of code below)
  ```rust
  if ui.available_height() > 0.0 {
      ui.allocate_space(ui.available_size());
  }
  ```
- It also demonstrates the use of hotkeys in [egui][egui] applications, both how to only enable the hotkey when the corresponding [button is active](https://github.com/c-git/log-viewer/blob/3a2e82a65550dfd349b965fd36ffa7f74b129541/src/app.rs#L829) and global hotkeys that are [always active](https://github.com/c-git/log-viewer/blob/3a2e82a65550dfd349b965fd36ffa7f74b129541/src/app.rs#L480).

</details>

# [bazooka-bot](https://github.com/c-git/bazooka-bot) (Rust)

> Discord bot for the [Bazooka Alliance Server](http://discord.gg/uQVy7BH) (Alliance for [Command and Conquer: Rivals](https://www.ea.com/en-ca/games/command-and-conquer/command-and-conquer-rivals) Game)

- Created a discord bot rust using [poise](https://docs.rs/poise/latest/poise/) to replace the older one that I had written in [python](https://github.com/fone-git/bazooka-bot).
- Hosted on [shuttle](https://www.shuttle.rs/)

<details>
    <summary>Click to see more</summary>

- Highlighted features:
  - Schedule events
  - Manage players voting on ideas
  - Manage recording of scores during the event
  - Uses both text based commands and [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)
  - See the [readme](https://github.com/c-git/bazooka-bot) of the project for all functionality

</details>

# [trippy](https://github.com/fujiapple852/trippy) (Rust)

> Combines the functionality of traceroute and ping and is designed to assist with the analysis of networking issues.

I help out with the development of the trippy program.
I answer issues on github (when I can) and occasionally assist with code reviews.
I've also corrected a few typos and introduced a more automated approach to snapshot testing using [insta](https://github.com/mitsuhiko/insta).

<details>
    <summary>Click to see more</summary>

I was originally interested in trippy when I was looking for a way to do "ping" from rust.
I was building a network monitoring tool to provide alerts when devices became unreachable.
Trippy wasn't yet a good fit for this use case but the maintainer was open to working with me on what I needed and thus I got involved with the project.
Trippy is now at a point where it is ready to support my use case.
However while waiting I developed a [temporary solution](https://github.com/rust-practice/conn_mon) based on the ping program that ships with debian.
Once time permits I will rebuild on top of trippy and incorporate what I learned from the temporary solution.
Even though I've not used trippy yet for my original use case, I am actively involved with the project.

</details>

# [egui][egui] (Rust)

> An easy-to-use immediate mode GUI in Rust that runs on both web and native

I've contributed several small improvements based on my interactions with this community.

<details>
    <summary>Click to see more</summary>

I've really enjoyed using [egui][egui].
This crate was my introduction to immediate mode GUI development.
I've found that using immediate mode for [PoC](https://en.wikipedia.org/wiki/Proof_of_concept) helps me focus on functionality instead of ascetics.
[IMHO](https://www.merriam-webster.com/dictionary/IMHO) they end up looking reasonable anyway ([example](https://uruth-lab.github.io/dbv/)).
I am using it for multiple of my ongoing projects.
I've contributed:

- a few typo fixes
- ensured [all examples](https://github.com/emilk/egui/pull/3770) on the [demo website](https://www.egui.rs/) include links to the source code
- updated the template to make it easy for new users to [set the icon](https://github.com/emilk/eframe_template/pull/122) for an application
- and created an alternate [example of how to load files](https://github.com/c-git/egui_file_picker_poll_promise) using the [poll-promise](https://github.com/EmbarkStudios/poll-promise) crate, which is closer to code I would want to use in an actual project.

</details>

[wasm]: https://webassembly.org/
[egui]: https://github.com/emilk/egui
