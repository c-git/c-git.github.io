+++
title="Versioning Crates"
date=2026-04-29
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
+++

# General tips

- The cargo book has a great [section on semver](https://doc.rust-lang.org/cargo/reference/semver.html) that gives examples of different types of changes. Note: breaking changes require a bump of the first non-zero version number. That is what cargo looks for to determine incompatibility.
- If you are releasing a library I highly recommend using [cargo-semver-checks](https://crates.io/crates/cargo-semver-checks) to help detect breaking changes. It's not perfect but it's always improving and is IMO a minimum amount of checking for libraries.

# Opinions on when to bump version numbers

For clarity I'm not talking which part of the version number to bump here which indicates the type of changes included.
I'm only taking about when that bump should happen.

<details>

<summary>Background</summary>

I've been giving this a lot of thought recently as I've noticed different ways that various crates do it.
After much consideration I came up with my opinions below.
I recently wanted to patch a library create that I depended on but they'd already bumped the version number in the git repo so I wasn't able to use patch.
Fortunately, it was a direct dependency so I just changed the source and was able to use my fork until my patch lands.

---

</details>

- For library crates do not bump until you are ready to release. I think this is the best way because if someone needs to make a change to your crate having the version number the same as the released version makes it easy to use [patch section](@/rust/cargo.md#patch-a-crate) of the `Cargo.toml` to replace your create throughout their dependencies. They are at least able to replace it without using patch if it's a direct dependency, but would still be better IMO to use patch to separate out when you're changing something on purpose.
- For binary crates I think the bump should happen right after release by bumping the minor (or patch if still pre 1.0) and appending `-dev`. For example from `0.1.3` to `0.1.4-dev` so that you users who build from the git repo instead have a different version number.
