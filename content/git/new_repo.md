+++
title="New Repo Creation"
date = 2023-06-15
updated = 2023-11-08
+++

NB: These instructions assume github with ssh key auth but any would be similar

1. Create empty repo in cloud
2. Create folder on local machine with same name (same name is recommended not required)
3. Open a command prompt in the folder and initialize git

```sh
git init
```

4. Create `.gitignore` file

```sh
touch .gitignore
```

5. Add file and commit

6. Add remote repo connection (Can be copied from github)

```sh
git remote add origin git@github.com:wykies/REPO_NAME.git
```

6. (Skippable) Move to main branch (-M is a shortcut for `--move --force`.) This step can usually be skipped in a new repo

```sh
git branch -M main
```

7. Push branch to remote and set current branch as a tracking branch (-u sets current brach to tracking)

```sh
git push -u origin main
```
