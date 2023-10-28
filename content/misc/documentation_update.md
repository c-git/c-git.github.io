+++
title='Documentation Update'
+++

# Overview

Top level folders under [content](https://github.com/c-git/c-git.github.io/tree/main/content) are sections and each has a
`_index.md` that specifies the configuration parameters for that section.
Then inside each folder you will find the pages for that section.

To ensure that sections stay in alphabetical order we use manually set incrementing weights for each section.
Initially the gap between the weights of sections is 50 and as sections are added in between we place them centered between their neighbours to reduce the frequency of needing to reweight.
This allows us to keep them in alphabetical order even though sorting by title is not available for top level sections.
We are using [zola](@/misc/zola.md), for more info on how it works see that page.

# Creating a section

As stated in the [overview](#overview) each section has a `_index.md`.
We only change the first two lines in that file and the other two always stay the same.
Namely, we set:

- `title` to an appropriate string and
- `weight` we set so that is halfway between the one **before** it and the one **after** it.

# Creating a page

## No co-located resources

Pages with no resources needed to be stored (co-location) in the same folder as them are simple and only require creating a file in the correct folder for the section with the name of page and the extension `.md`.
At the top of the file you need to add the [front matter](https://www.getzola.org/documentation/content/page/#front-matter).
We use the simple TOML version which starts with `+++` and ends the same way.
The only variable that we use is `title` and this must be set.

## With co-located resources

Pages that need to link to resources that must be stored in the same location require a folder to be created with the name of the page.
The content of the page is then specified in `index.md` inside of that folder.
All the related content can then be placed in that same folder.
