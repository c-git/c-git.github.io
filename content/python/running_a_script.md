+++
title = "Running a Script"
date = 2023-12-29
extra = { series = "python" }
taxonomies = { tags = ["python"] }
updated = 2025-04-15
+++

# TLDR

Use the following (Sets `PYTHONPATH` in addition to normal run command)

```sh
PYTHONPATH=$(pwd) python src/main.py
```

# Background

At first blush this seems obvious and very easy but...
I inherited a setup on my first big python project that had the code inside a src folder and data and other things in other folders at that level.
It expected all commands to be executed from that folder.
All paths in the code were relative from that working directory.
While it make the code harder to run from the command line it wasn't any harder in PyCharm (other than setting the correct working directory).
Overall I liked the separation of data from code but co-location so carried it over to a few other projects.
But each time I need to run it from the command line I run into issues so documenting how to run it for future reference.
Running from the correct folder is not enough to make it work hence why I'm writing it down.

# Example

## Example folder tree

```
$ tree example/
example/
├── data
│   ├── file1.csv
│   └── file2.csv
└── src
    ├── helper.py
    └── main.py

3 directories, 5 files
```

## Content of `src/main.py`

```
$ cat src/main.py 
from src.helper import hello_again

print("Hi from main")
hello_again()
```

## Content of `src/helper.py`

```
$ cat src/helper.py 
def hello_again():
	print("Well hello there")
```

## Error when trying from inside the example folder

```
$ python src/main.py
Traceback (most recent call last):
File "/home/user/example/src/main.py", line 1, in <module>
from src.helper import hello_again
ModuleNotFoundError: No module named 'src'
```

## Successful command by setting `PYTHONPATH` to current directory

```
$ PYTHONPATH=$(pwd) python src/main.py
Hi from main
Well hello there
```
