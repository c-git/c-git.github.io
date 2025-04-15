+++
title = "Github Actions"
date = 2024-12-23
extra = { series = "github" }
taxonomies = { tags = ["github"] }
+++

# Reusing a github action

Source: <https://docs.github.com/en/actions/sharing-automations/reusing-workflows#calling-a-reusable-workflow>

See source for more details but I'll focus on the use case I most commonly have, two workflows in the same repo and I want to call one from the other to ensure it runs and succeeds before the other one starts.
Example use case can be found at <https://github.com/wykies/crates/> where the `shuttle.yml` calls `general.yml`.

In the workflow being called you must have the following in inside of the `on` section.

```yml
on:  
  workflow_call:
```

and in the caller you need to have a separate job that put the relative path the called workflow in uses as below:

```yml
jobs:
  run_tests:
    uses: ./.github/workflows/general.yml
  deploy:
    runs-on: ubuntu-latest
    needs: run_tests # Requires that the other job succeeds before this one will start
    steps:
```
