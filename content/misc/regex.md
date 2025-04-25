+++
title = "Regex"
date = 2024-07-28
taxonomies = { tags = ["misc"] }
updated = 2025-04-25
+++

# Foreword

I've written many regexes over the years that I'd like to be able to find again...
Decided it's probably time to take note of ones I think I'll use again even if they're easy to rewrite because, sometimes when you rewrite them you bump into the same edge cases again.

My favorite tool when writing regex is <https://regex101.com/>.
It makes it very easy to test and debug regex expressions and has a quick reference with all the groups and quantifiers and things I don't commit to memory.
PyCharm also has [regex expression](@/pycharm/regex/index.md) tester which is useful but I still get more value out of <https://regex101.com> as that works even when I'm not using PyCharm.
Also you do know find and replace in many programs supports regex right... (like vscode and Notepad++).

# Cookbook

## Find repeated words in a document

```re
\b(\w+)\s+\1\b
```
