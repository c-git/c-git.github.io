+++
title="Site Definitions"
date=2023-10-29
updated=2023-11-05
extra = { series = "content" }
taxonomies = { tags = ["content"] }
+++

# Foreword

Explains some words and what they mean on a site wide basis.
It mostly explains meta data and what it means, not necessarily related to the content of the pages.
This is meant to improve consistency so I can see what I meant the last time I used the word.
I think looking at a few examples from below should make the intention clear.
For example `Published` does not mean published in all possible contexts that it is used on this site but rather what the published date refers to.

# Words

## Published

Taken from `date` in the [page front matter][page_front_matter].
This is the date the article was first published or last modified if it was from before the articles were made public.
See [modification instructions](@/misc/documentation_update.md#must-include-a-date) for more details on updating.

## Updated

Taken from `updated` in the [page front matter][page_front_matter].
This is the date the article was last modified. Note: This doesn't mean the entire article was updated nor retested.
It may be a trivial change but this date only reflects that it was changed.
You can think of it as a modified date for the page.
To see what actually change you'd need to check the git history.
If you have difficulty finding the information feel free to create an issue on [github](https://github.com/c-git/c-git.github.io/issues).

[page_front_matter]: https://www.getzola.org/documentation/content/page/#front-matter
