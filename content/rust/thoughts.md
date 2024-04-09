+++
title = "Thoughts about rust"
date = 2023-11-17
updated = 2024-04-09
+++

# Foreword

I kept having thoughts / observations that I wanted to write somewhere so putting them here.

# Rust isn't actually hard

Rust isn't actually hard, giving up bad habits is hard.
I actually think if your first programming language is rust then it's easier to pick up and become productive.
Happy to get some counter examples, if you have some please do create an issue on github and let me know. (Link below).

# Tooling really matters

When I started with rust I was pleased with the tooling and that hasn't changed but I acknowledge that it matters to how much I enjoy using the language.
The right IDE and other supporting tools drastically changes the experience one has with a language.
Don't underestimate the value of a good editor, compiler, linter or formatter.
I personally do not like formatting code by hand seems like a waste of time and code completion is table stakes.
If it is context aware that's all the better (but feels like table stakes, don't think I can go back to manually narrowing down results).

# Types

Trying to write python today I realized why I like types in rust.
Types allow me specify my assumptions at compile time.
And get the compiler to check them for me.

# Prototyping

I'm not slower in rust than I am in other languages.
I can just unwrap and clone everywhere and go as fast as I want.
Then later it's recorded where I need to go back and fix if the project does go forward.

# A thousand french men can't be wrong

Yes, yes they can.
Just because most people do something doesn't make it right.

# No network access

If you don't have network access rust still makes it easy to work on a program that uses network like a discord bot because testing is just a confirmation.
If it compiles a lot of the time it does what you wanted as well.
This works for more than just network code but requires minimizing panics and making impossible states unrepresentable so the compiler can check if the code is correct.

# Unexpected dangers in using rust

I'd been programming for more than a decade before I started rust and I've realized an unexpected problem with starting rust is that it makes it harder to update old projects.
My ability to write python for example didn't really atrophy but I find myself wanting easier ways to refactor for example and without much effort knowing I got all places that needed to be updated.
And being able to work "locally" with the types providing protection I can reason about a function without needing to see all call sites.
