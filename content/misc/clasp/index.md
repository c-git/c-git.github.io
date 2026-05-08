+++
title='CLASP'
date = 2023-04-17
updated = 2026-05-08
taxonomies = { tags = ["Misc"] }
aliases=["/git/new-clasp"]
+++

{{ enable_checkboxes() }}

# Setup

If this is your first time using clasp or first time on a new computer the best instructions to get started can be found in the Readme of the project it self at <https://github.com/google/clasp>

In particular you will need:

- To install [Node.js](https://nodejs.org/en/download/)
- To install clasp
  ```sh
  npm install -g @google/clasp
  ```
- And the enable the to use the Google Apps Script API: <https://script.google.com/home/usersettings>

# How to use

- Once everything has been setup (ie. both [Setup](@/misc/clasp/index.md#setup) and [New project setup](@/misc/clasp/index.md#new-project-setup) are completed)
- Edit your code inside of the `src` folder then use `npm run deploy` to upload to the cloud
- See other commands in `package.json`
- You can use clasp normally as the `rootDir` is set but you need to bundle the typescript first so you would need to use `npm run build`.

# New project setup

- [ ] Create new git repo from the [template repo](template_repo) (big green button on top right)
- [ ] Create Google Apps Script project (On Standalone, Sheets, etc.)
- [ ] Clone Scripts Project into an **EMPTY FOLDER** using clasp (We won't be keeping this folder we just need two files from the clone)
  ```sh
  clasp clone <scriptID>
  ```
- [ ] Copy/Move `.clasp.json` and `appsscript.json` into the root of the repo created from the template.
- [ ] You may delete the temporary folder at this point
- [ ] Edit `.clasp.json` to set the `rootDir` to `dist`
  ```json
  "rootDir": "dist",
  ```
- [ ] Install npm dependencies
  ```sh
  npm install
  ```

## Additional Steps for Wykies Library

- From inside of the `src` folder
  ```sh
  cd src
  ```
- [ ] Add ts_lib
  - Part of wykies
  ```sh
  git submodule add ../ts_lib.git
  ```
  - Outside of wykies
  ```sh
  git submodule add git@github.com:wykies/ts_lib.git
  ```

# Converting an existing Javascript (JS) project to TypeScript (TS)

- [ ] Move files into a directory called `src`
- [ ] Remove `js_lib` if in use see [removal instructions for submodule](@/git/submodules.md#remove-a-submodule)
- [ ] Change all `.js` files to `.ts` files
- [ ] Download
- [ ] Follow normal instructions from [New TS project](@/misc/clasp/index.md##additional-steps-for-wykies-library)

# Ignore files

## File location

Source: <https://github.com/google/clasp#ignore-file-claspignore>

Put a `.claspignore` in the root of the project's directory.
All paths are relative to root.

## Format

Uses [multimatch](https://github.com/sindresorhus/multimatch)

[Glob Pattern](https://github.com/sindresorhus/multimatch#globbing-patterns):

- `*` matches any number of characters, but not /
- `?` matches a single character, but not /
- `**` matches any number of characters, including /, as long as it's the only thing in a path part
- `{}` allows for a comma-separated list of "or" expressions
- `!` at the beginning of a pattern will negate the match

### Example

```
js_lib/**
```

[template_repo]: https://github.com/c-git/clasp_minimal_typescript
