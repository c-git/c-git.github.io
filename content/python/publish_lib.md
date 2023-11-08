+++
title="Publish Library"
date = 2022-09-14
updated = 2023-11-08
+++

Source: <https://packaging.python.org/en/latest/tutorials/packaging-projects/>

## Upload New Version

### Upload specific version

Replace `x.x.x` with the version number e.g. `1.0.0`

```sh
python3 -m build
```

```sh
twine upload dist/opylib-x.x.x*
```

### Upload all

```sh
python3 -m build
twine upload dist/*
```

## Initial Setup Setup

Last command appears to be python version specific.
Got it from an error message generated when I tried to use build.

```sh
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade build
python3 -m pip install --upgrade twine
sudo apt install python3.10-venv
```
