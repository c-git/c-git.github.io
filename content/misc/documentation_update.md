+++
title='Documentation Update'
date=2023-10-27
updated= 2025-04-24
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

## Must include a date

If you want to make use of [feed generation](https://www.getzola.org/documentation/templates/feeds/) then the pages need to have dates on them.
`date` corresponds to [published](@/site-definitions.md#published) and must be set.
`updated` corresponds to [updated](@/site-definitions.md#updated) and is optional.
The values need to be set in the [front matter](https://www.getzola.org/documentation/content/page/#front-matter) of the page.
Each value is explained in the comments below.
Note that the comments are not required to be copied.
All pages created before starting the public website did not have a date and as such all have been set to the last edit date as a proxy.

To simplify setting dates I created a tool called [zola_chrono][zola_chrono] that automates the updating of `date` and `updated`.

```toml
# The date of the post.
# Two formats are allowed: YYYY-MM-DD (2012-10-02) and RFC3339 (2002-10-02T15:00:00Z).
# Do not wrap dates in quotes; the line below only indicates that there is no default date.
# If the section variable `sort_by` is set to `date`, then any page that lacks a `date`
# will not be rendered.
# Setting this overrides a date set in the filename.
date =

# The last updated date of the post, if different from the date.
# Same format as `date`.
updated =
```

## Rules for setting `date` and `updated`

The fields should be set according to the following rules:

1. `date` should be the original publish date (Must exist and be today or earlier).
2. `updated` should only be set if `date` is not equal to the last commit date, if it needs to be set it should match the last commit date.
   Which may mean setting it to todays date if you are about to commit that file.

Turns out with just these two simple rules it creates at least 42 interesting cases to consider.
Many of them are edge cases but all had to be accounted for in [zola_chrono][zola_chrono].
As a result the most authoritative answer on what should happen in a given case is documented in [the tests](https://github.com/c-git/zola_chrono/blob/710e6e84fe1ba788dd0c29ea77084aadcec01f0f/src/processing/file_data.rs#L458-L507).
If you're already familiar with [rstest](https://docs.rs/rstest/latest/rstest/attr.rstest.html) you can skip the following comment, the tests show several cases with the inputs on the left and expected values on the right. To see what each column represents look at the function definition below the cases the correspond to the function arguments.

# Using [zola_chrono][zola_chrono]

## Install

```sh
cargo install zola_chrono
```

## Setting up a pre-push hook

Each line does the following respectively

1. Create the hook file
2. Move the file into the hooks folder (it should already exist if git is setup)
3. Make the file executable

```sh
echo -e '#!/bin/sh\nzola_chrono --check content/' > pre-push
mv pre-push .git/hooks
chmod +x .git/hooks/pre-push
```

The hook should now be setup and working.

[zola_chrono]: https://github.com/c-git/zola_chrono
