+++
title='Documentation Update'
+++

# Overview

Top level folders under `content` are sections and each has a `_index.md` that specifies the configuration parameters for that section.
Then inside each folder you will find the pages for that section.
This ensures that sections stay in alphabetical order even though sorting by title is not available for top level sections.
We are using [zola](@/misc/zola.md), for more info on how it works see that page.

# Creating a section

As stated in the [overview](#overview) each section has a `_index.md`.
We only change the first two lines in that file and the other two always stay the same.
Namely, we set:

- `title` to an appropriate string and
- `weight` we set so that is halfway between the one **before** it and **after** it.

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

# Creating a release

We are using git-flow for branch management.

- Once all the desired changes have been committed to the development branch a release can be started.
- Ensure all changes have been committed, stashed or discarded (including any changes made to the `docs` folder during testing).
- We are using [SemVer](https://semver.org/) for specifying our version numbers, please use the next suitable number.
- Once the release branch is created then first change the version number in `config.toml` under `extra.docs_version` to match the version number of the next version.
- Commit this change as `Version Bump`
- Make any final tweaks needed to release this version
- Finalize the release to update master and develop.

# Updating the docs server with a new version

To update the docs on the webserver:

- Logon to the webserver as `user`
- Navigate to the documentation folder `cd documentation/`
- Run the update command `ml`
