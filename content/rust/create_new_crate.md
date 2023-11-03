+++
title="Create New Crate"
date=2023-11-02
+++

TODO: Uncomment source info

<!-- Patterned on: [New Repo Creation](@/git/new_repo.md) -->

NB: These instructions assume github with ssh key auth but any would be similar

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
6. Push branch to remote (Can be done from VSCode UI) and set current branch as a tracking branch (-u sets current brach to tracking)
   ```sh
   git push -u origin main
   ```
7. Initialize gitflow
8. Copy in and link to template (for updates). To see more explanation of these steps see [CI instructions](@/rust/ci.md).
   ```sh
   git remote add template git@github.com:c-git/rust-crate-template.git
   git fetch template
   git merge --allow-unrelated template/main
   ```
9. Resolve merge conflict
   ```sh
   git checkout template/main -- .gitignore
   git checkout template/main -- Cargo.toml
   ```
10. Restore crate name (was lost during merge).
11. Add [CI](@/rust/ci.md).
