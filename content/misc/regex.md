+++
title = "Regex"
date = 2024-07-28
taxonomies = { tags = ["Misc"] }
updated = 2025-05-11
+++

# Foreword

I've written many regexes over the years that I'd like to be able to find again...
Decided it's probably time to take note of ones I think I'll use again even if they're easy to rewrite because, sometimes when you rewrite them you bump into the same edge cases again.
Also you do know that "find and replace" in many programs supports regex right... (like vscode and Notepad++).

# Tools writing and understanding regex expressions

- <https://regex101.com/> - This is my favorite tool when writing regex.
  It makes it very easy to test and debug regex expressions and has a quick reference with all the groups and quantifiers and things I don't commit to memory.
- PyCharm's expression tester - Built into PyCharm is a [regex expression](@/pycharm/regex/index.md) tester which is useful but I still get more value out of <https://regex101.com> as that works even when I'm not using PyCharm.
- <https://pythonium.net/regex> - Provides a graphical state machine like view of the regex supplied.
  Found it good for visualizing expressions to try to understand them.
  Note that there is a mini tutorial on how to use the tool lower down on the page.

# Cookbook

## Find repeated words in a document

```re
\b(\w+)\s+\1\b
```
