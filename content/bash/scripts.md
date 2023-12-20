+++
title = "Scripts"
date = 2023-12-11
updated = 2023-12-20
aliases = ["/debian/bash"]
+++

# If statements

Source: <https://linuxize.com/post/bash-if-else-statement/>

```bash
if TEST-COMMAND1
then
  STATEMENTS1
elif TEST-COMMAND2
then
  STATEMENTS2
else
  STATEMENTS3
fi
```

```bash
#!/bin/bash

echo -n "Enter a number: "
read VAR

if [[ $VAR -gt 10 ]]
then
  echo "The variable is greater than 10."
elif [[ $VAR -eq 10 ]]
then
  echo "The variable is equal to 10."
else
  echo "The variable is less than 10."
fi
```

# Set script to exit on errors

Source: <https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html>

```bash
set -e
```
