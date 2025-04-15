+++
title="Tips"
date = 2024-02-08
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
updated = 2025-04-15
+++

# Recovering Storage Space

- [Sharing a Cargo Build Folder](@/rust/tips.md#sharing-a-cargo-build-folder)
- Remove unused toolchains (Recovered about 4gb removing 1.58.1, 1.61, 1.65, 1.70 and 1.71)
  - See list of toolchains `rustup toolchain list`
  - Remove a toolchain `rustup toolchain uninstall <VALUE FROM LAST LIST>`
- [Cargo Sweep](https://crates.io/crates/cargo-sweep) (Suggested by [Conrad Ludgate][conrad])
- [Not tested yet] Run cargo clean on all projects `find ~ -type d -name target -exec sh -c 'cd {} && cd .. && cargo clean' \` from [timClicks notes](https://github.com/timClicks/notebook/blob/main/rust/cheatsheet.md#free-up-disk-space)

# Sharing a Cargo Build Folder

Sources:

- [The Cargo Book - Build Cache](https://doc.rust-lang.org/cargo/guide/build-cache.html)
- [The Cargo Book - Configuration](https://doc.rust-lang.org/cargo/reference/config.html#buildtarget-dir)

<details>
   <summary>Back story on why I looked into this in the first place</summary>

Over time I'd worked on several projects, and compiled many more that I was looking into and after a while I noticed that the folder where I kept my projects was several gigs larger than I expected.
So, I checked what the [largest folders](@/debian/useful_commands.md#show-largest-folder-files) were and noticed all of them were `target` folders in rust projects.
I needed the space at the time so I manually cleaned it up.
Time passed and it built up again... so needed a better solution.
I remembered that [Jon Gjengset](https://github.com/jonhoo/) used a shared build folder from one of his streams and inquired if he'd run into any issues.
Based on him not having had any issues using it I decided to try it and found that it worked out pretty well for me.

It has made it much easier to see how much space is being used by the build folder and much easier to delete it if needed.
It also reduce the total size as multiple projects that required the same crates wouldn't each need to have their own copy which sped up build times and saved space.

I've since heard of [cargo sweep](https://crates.io/crates/cargo-sweep) from [Conrad Ludgate][conrad]. I found this relevant [post](https://users.rust-lang.org/t/cleaning-target-folders-with-cargo-sweep/84229) while looking for the project's crate.io page.

---

</details>

Cargo looks for a folder called `.cargo` in the project folder or a parent folder then a file called `config.toml` and inside of that `build.target-dir` to determine what build folder to use.
By default this is just `target` which uses a folder called `target` in the root of the project but instead you can create a shared `.cargo` folder above where you have your projects and set one folder for them all to share.

For example it could be something like below. Note comment is only there to show where file goes not actually needed in file.

```toml
# .cargo/config.toml
[build]
target-dir = "/home/one/build/cargo/target"
```

[conrad]: https://github.com/conradludgate
