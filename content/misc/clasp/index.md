+++
title='CLASP'
date = 2023-04-17
updated = 2024-11-10
+++

# New project setup

- Create New Repo using Git GUI
- Create Scripts project (On Google Scripts, Sheets, etc.)
- Clone Scripts Project into repo folder using clasp

```sh
clasp clone <scriptID>
```

- Copy Hook and .gitignore from template
  folder `repos/zTemplates/clasp/CopyContentsToProjectRoot/` or create folder to copy from
  using [this zip file](CopyContentsToProjectRoot.tar.xz).

## Steps if using TypeScript (TS)

Source: <https://developers.google.com/apps-script/guides/typescript>

Source: <https://github.com/google/clasp/blob/master/docs/typescript.md>

- Add Type definitions for Apps Script

```sh
npm i -S @types/google-apps-script
```

- Add ts_lib
  - Part of wykies

  ```sh
  git submodule add ../ts_lib.git
  ```

  - Outside of wykies

  ```sh
  git submodule add git@github.com:wykies/ts_lib.git
  ```

- (Optional) Use the following command to push and watch the ts files. Watch is not required.

```sh
clasp push --watch
```

### TypeScript Modules, exports and imports

Source: <https://github.com/google/clasp/blob/master/docs/typescript.md#the-namespace-statement-workaround>

Instead of normal imports use the following as import is not supported in GAS

```ts
// module.ts
namespace MyLib {
    export function foo() {
    }

    function bar() {
    }  // this function can only be addressed from within the `MyLib` namespace
}
```

```ts
// anyFiles.ts
MyLib.foo();  // address a namespace's exported content directly
```

## Steps if using Javascript (JS)

- Add js_lib

```sh
git submodule add ../js_lib.git
```

# Converting an existing Javascript (JS) project to TypeScript (TS)

- Copy over from template to update ignore and hooks [last step in new](@/misc/clasp/index.md#new-project-setup)
- Remove `js_lib` if in use see [removal instructions for submodule](@/git/submodules.md#remove-a-submodule)
- Change all `.js` files to `.ts` files
- Follow normal instructions from [New TS project](@/misc/clasp/index.md#steps-if-using-typescript-ts)

# Useful Commands

- `clasp clone <scriptID>` [Clone an existing project](https://developers.google.com/apps-script/guides/clasp#clone_an_existing_project)
- `clasp pull` [Download a script project](https://developers.google.com/apps-script/guides/clasp#download_a_script_project)
- `clasp push` [Upload a script project](https://developers.google.com/apps-script/guides/clasp#upload_a_script_project)
- `clasp open` [Open the project in the Apps Script editor](https://developers.google.com/apps-script/guides/clasp#open_the_project_in_the_editor)

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

# Installation

Source: <https://developers.google.com/apps-script/guides/clasp#installation>

First install Install [Node.js](https://nodejs.org/en/download/)

```sh
npm install @google/clasp -g
```
