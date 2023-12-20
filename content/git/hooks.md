+++
title = "Hooks Examples"
date = 2023-12-20
+++

# pre-commit Hook to prevent changes to a zola project base_url

```bash
#!/bin/sh

# Check if we see the line with the base_url being changed
git diff --cached config.toml | grep "^-base_url"
if [ $? -eq 0 ]
then
    echo "Error: Change detected to base_url"
    exit 1
fi
```

# zola_chrono pre-push hook

[Link](@/misc/documentation_update.md#setting-up-a-pre-push-hook)
