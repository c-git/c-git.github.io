+++
title="Publish Library"
date = 2022-09-14
updated = 2025-04-20
extra = { series = "python" }
taxonomies = { tags = ["python"] }
+++

# Editable Install (Local Project Install)

Allows you to run the library before publishing it for external or use case testing.

Sources:

- <https://stackoverflow.com/questions/23075397/python-how-to-edit-an-installed-package>
- <https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs>

## Run from local path source

```sh
pip install -e path/to/SomeProject
```

## Run from git source

```sh
pip install -e git+https://github.com/c-git/opylib.git#egg=opylib
```

# Publish a version

Source: <https://packaging.python.org/en/latest/tutorials/packaging-projects/>

## Upload specific version

Replace `x.x.x` with the version number e.g. `1.0.0`

```sh
python3 -m build
```

```sh
twine upload dist/opylib-x.x.x*
```

## Upload all

```sh
python3 -m build
twine upload dist/*
```

## Initial Setup for Publishing

Last command appears to be python version specific.
Got it from an error message generated when I tried to use build.

```sh
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade build
python3 -m pip install --upgrade twine
sudo apt install python3.10-venv
```
