+++
title = "Scripts"
date = 2023-12-11
updated = 2024-12-22
aliases = ["/debian/bash"]
+++

# Shebang Line

Source: <https://codejunction.hashnode.dev/the-advantage-of-using-usrbinenv-bash-over-binbash>

This is the line that goes at the top of the script and tells the shell what to use to execute the script

```bash
#!/usr/bin/env bash
```

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

if [ $VAR -gt 10 ]
then
  echo "The variable is greater than 10."
elif [ $VAR -eq 10 ]
then
  echo "The variable is equal to 10."
else
  echo "The variable is less than 10."
fi
```

# Until

```bash
#!/bin/bash

counter=0

until [ $counter -gt 5 ]
do
  echo Counter: $counter
  ((counter++))
done
```

# Positional arguments

Source: <https://www.redhat.com/en/blog/arguments-options-bash-scripts>

$0 - the name of the running script and $1 to $9 are positional arguments.
The example if for a executable text file called `test_script` in your current directory.

```bash
#!/usr/bin/env bash

echo Running \"$0\"
echo With 1st argument in quotes is \"$1\"
echo And 2nd without quotes this time is: "$2"
echo And 3rd without quotes this time is: $3
```

Run with `./test_script.sh first second third` and it outputs

```
Running "./test_script.sh"
With 1st argument in quotes is "first"
And 2nd without quotes this time is: second
And 3rd without quotes this time is: third
```

# Set script to exit on errors

Source: <https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html>

```bash
set -e
```

# Set script to echo commands

Source: <https://stackoverflow.com/questions/2853803/how-to-echo-shell-commands-as-they-are-executed>

```bash
set -x
```
