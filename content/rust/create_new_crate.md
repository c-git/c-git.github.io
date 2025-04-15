+++
title="Create New Crate"
date=2023-11-02
updated= 2024-12-29
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

Patterned on: [New Repo Creation](@/git/new_repo.md)

# Notes

- These instructions assume github with ssh key auth but any would be similar
- If creating a egui application with eframe I have an opinionated setup with a script at <https://github.com/c-git/my_egui_template> (See readme for more details).

# Instructions

1. Create empty repo in cloud
2. Create folder on local machine with same name (same name is recommended not required)
3. Open a command prompt in the folder and initialize the crate
   ```sh
   cargo init --lib
   ```
4. Make initial commit
5. Add remote repo connection (Can be copied from github)
   ```sh
   git remote add origin git@github.com:wykies/REPO_NAME.git
   ```
6. Push branch to remote (Can be done from vscode UI) and set current branch as a tracking branch (-u sets current brach to tracking)
   ```sh
   git push -u origin main
   ```
7. Copy in and link to template (for updates). To see more explanation of these steps see [CI instructions](@/rust/ci.md).
   ```sh
   git remote add template git@github.com:c-git/rust-crate-template.git
   git fetch template
   git merge --allow-unrelated template/main
   ```
8. Resolve merge conflict
   ```sh
   git checkout template/main -- .gitignore
   git checkout template/main -- Cargo.toml
   git checkout template/main -- src/lib.rs
   ```

9. Restore crate name (was lost during merge).
10. Add [CI](@/rust/ci.md).
