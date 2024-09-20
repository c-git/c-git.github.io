+++
title = "Notes"
weight = 0
sort_by = "title"
insert_anchor_links = "right"
+++

# Chester Wyke

## About Me

I'm better known online as Onè.
I'm a software developer by trade and passion.
I've been programming since high school and have always loved the thrill of the journey to the solution.
Programming, just like life, is about perspective.
A change in perspective can bring into focus opportunities instead of just problems.

I attained a Master’s degree in Computer Science from [York University](https://www.yorku.ca/), under the supervision of [Dr. Ruth Urner](https://www.eecs.yorku.ca/~uruth/).
In my thesis, titled "AN AXIOMATIC PERSPECTIVE ON ANOMALY DETECTION", we created a foundation for the development of a line of theoretical work on anomaly detection (outlier detection).
This work showed vulnerabilities in methods that are still in ongoing use.
I also have a paper ([ID# M2671](https://www.ecai2024.eu/programme/accepted-papers)), with the same title as my thesis, that has been accepted at the 27TH EUROPEAN CONFERENCE ON ARTIFICIAL INTELLIGENCE ([ECAI 2024](https://www.ecai2024.eu/)).

As part of my thesis I also developed two tools that facilitated my research.
One was a [framework in python](https://github.com/uruth-lab/experiment_framework) to manage running experiments and the other was a tool written in [Rust](https://www.rust-lang.org/) using [egui][egui] to [build and edit datasets](https://github.com/uruth-lab/dbv/).
The dataset builder is able to be [run in the browser](https://uruth-lab.github.io/dbv/) using [WASM][wasm].

## About this site

This site (other than this page) primarily serves as my notes on various subjects.
I decided to share them publicly so that it may benefit others as well.
Feel free to reach out via [github](https://github.com/c-git/c-git.github.io/) issues with any feedback.
Happy for any questions, comments, emotional outbursts...

## Open source projects

- [trippy](https://github.com/fujiapple852/trippy) (Rust)

  > Combines the functionality of traceroute and ping and is designed to assist with the analysis of networking issues.

  I help out with the development of the trippy program.
  I was originally interested in trippy when I was looking for a way to do "ping" from rust.
  I was building a network monitoring tool to provide alerts when devices became unreachable.
  Trippy wasn't yet a good fit for this use case but the maintainer was open to working with me on what I needed and thus I got involved with the project.
  Trippy is now at a point where it is ready to support my use case.
  However while waiting I developed a [temporary solution](https://github.com/rust-practice/conn_mon) based on the ping program that ships with debian.
  Once time permits I will rebuild on top of trippy and incorporate what I learned from the temporary solution.

  Even though I've not used trippy yet for my original use case, I am actively involved with the project.
  I answer issues on github (when I can) and occasionally assist with code reviews.
  I've also corrected a few typos and introduced a more automated approach to snapshot testing using [insta](https://github.com/mitsuhiko/insta).

- [reqwest](https://github.com/seanmonstar/reqwest) (Rust)

  > An easy and powerful Rust HTTP Client

  I needed to use reqwest in a [WASM][wasm] context (inside of the browser) for a project I was working on.
  However, reqwest currently does not support cookies when compiled for [WASM][wasm].
  After experimenting with a workaround that resulted in success, I decided to try to implement the functionality directly into reqwest. I was fortunate that others had already tried before me and cleared the road blocks.
  Hence I met no resistance and was able to create a [PR](https://github.com/seanmonstar/reqwest/pull/2360) to add cookie support for [WASM][wasm] builds.

- [egui][egui] (Rust)

  > An easy-to-use immediate mode GUI in Rust that runs on both web and native

  I've really enjoyed using [egui][egui].
  This crate was my introduction to immediate mode GUI development.
  I've found that using immediate mode for [PoC](https://en.wikipedia.org/wiki/Proof_of_concept) helps me focus on functionality instead of nits on ascetics.
  [IMHO](https://www.merriam-webster.com/dictionary/IMHO) they end up looking reasonable anyway ([example](https://uruth-lab.github.io/dbv/)).
  I am using it for multiple of my ongoing projects.
  I've contributed:
  - a few typo fixes
  - ensured [all examples](https://github.com/emilk/egui/pull/3770) on the [demo website](https://www.egui.rs/) include links to the source code
  - updated the template to make it easy for new users to [set the icon](https://github.com/emilk/eframe_template/pull/122) for an application
  - and created an alternate [example of how to load files](https://github.com/c-git/egui_file_picker_poll_promise) using the [poll-promise](https://github.com/EmbarkStudios/poll-promise) crate, which is closer to code I would want to use in an actual project.

- [log-viewer](https://github.com/c-git/log-viewer) (Rust) [Online Demo](http://dev.chester.wykies.com/log-viewer/)

  > Simple log viewer for logs with json lines

  I developed a simple log viewing application using [egui][egui].
  It enables basic log file navigation.
  It works on log files where each line is a json string.
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
  - It also demonstrates the use of hotkeys in [egui][egui] applications. Both how to only enable the hotkey when the corresponding [button is active](https://github.com/c-git/log-viewer/blob/3a2e82a65550dfd349b965fd36ffa7f74b129541/src/app.rs#L829) and global hotkeys that are [always active](https://github.com/c-git/log-viewer/blob/3a2e82a65550dfd349b965fd36ffa7f74b129541/src/app.rs#L480).
- A list of the crates I've published to crates.io can be found [here](https://crates.io/users/c-git?sort=downloads)

[wasm]: https://webassembly.org/
[egui]: https://github.com/emilk/egui
