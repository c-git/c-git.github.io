+++
title = "Scripts"
date = 2023-12-11
updated = 2025-04-15
aliases = ["/debian/bash"]
extra = { series = "bash" }
taxonomies = { tags = ["bash"] }
+++

# Shebang Line

Source: <https://codejunction.hashnode.dev/the-advantage-of-using-usrbinenv-bash-over-binbash>

This is the line that goes at the top of the script and tells the shell what to use to execute the script

```bash
#!/usr/bin/env bash
```

# If statements

Source: <https://linuxize.com/post/bash-if-else-statement/>

**WARNING!!** I ran into syntax errors with `fi` if I put `then` on the same line with `if` (see error message below)

> ... syntax error near unexpected token `fi'

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

# Case statements

Source: <https://linuxize.com/post/bash-case-statement/>

```bash
case EXPRESSION in

  PATTERN_1)
    STATEMENTS
    ;;

  PATTERN_2)
    STATEMENTS
    ;;

  PATTERN_N)
    STATEMENTS
    ;;

  *)
    STATEMENTS
    ;;
esac
```

```bash
#!/bin/bash

echo -n "Enter the name of a country: "
read COUNTRY

echo -n "The official language of $COUNTRY is "

case $COUNTRY in

  Lithuania)
    echo -n "Lithuanian"
    ;;

  Romania | Moldova)
    echo -n "Romanian"
    ;;

  Italy | "San Marino" | Switzerland | "Vatican City")
    echo -n "Italian"
    ;;

  *)
    echo -n "unknown"
    ;;
esac
```

# Comparing Strings

Source: <https://linuxize.com/post/how-to-compare-strings-in-bash/>

See link for more info.
One note I wanted to add is to ensure you use quotes around your strings especially if they are coming from variables.

# Directory exits test (and negation)

The example below does nothing in the positive case and exits on the negative case

```bash
if [ -d "$SRC_DIR" ] 
then
    : # Do nothing (was getting trouble with negating the condition)
else
  echo "Error: Source directory does not exist"
  exit 1
fi
```

# No-Op

Source: <https://stackoverflow.com/questions/12404661/what-is-the-use-case-of-noop-in-bash>

Simply use a `:`

```bash
while keep_waiting; do
  : # do nothing
done
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

# For loops

Source: <https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays>

| Syntax          | Result                                  |
| :-------------- | :-------------------------------------- |
| `arr=()`        | Create an empty array                   |
| `${arr[2]}`     | Retrieve third element                  |
| `${!arr[@]}`    | Retrieve array indices                  |
| `arr[0]=3`      | Overwrite 1st element                   |
| `str=$(ls)`     | Save ls output as a string              |
| `${arr[@]:s:n}` | Retrieve n elements starting at index s |

## Example simple application call

```bash
allThreads=(1 2 4 8 16 32 64 128)
allRuntimes=()
for t in ${allThreads[@]}; do
  runtime=$(./pipeline --threads $t)
  allRuntimes+=( $runtime )
done
```

## Example Log Alerting

```bash
# List of logs and who should be notified of issues
logPaths=("api.log" "auth.log" "jenkins.log" "data.log")
logEmails=("jay@email" "emma@email" "jon@email" "sophia@email")

# Look for signs of trouble in each log
for i in ${!logPaths[@]};
do
  log=${logPaths[$i]}
  stakeholder=${logEmails[$i]}
  numErrors=$( tail -n 100 "$log" | grep "ERROR" | wc -l )

  # Warn stakeholders if recently saw > 5 errors
  if [[ "$numErrors" -gt 5 ]];
  then
    emailRecipient="$stakeholder"
    emailSubject="WARNING: ${log} showing unusual levels of errors"
    emailBody="${numErrors} errors found in log ${log}"
    echo "$emailBody" | mailx -s "$emailSubject" "$emailRecipient"
  fi
done
```
