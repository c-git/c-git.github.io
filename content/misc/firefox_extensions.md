+++
title="Firefox Extensions"
date = 2023-10-22
updated = 2023-11-08
+++

# Reference Sources

To get started see [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) tutorial. Note must package and sign before it can be installed for more than just debugging.

# Persistent Install

Source: <https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/>

## Install web-ext tool

```sh
sudo npm install --global web-ext
```

## Test web-ext tool works

```sh
web-ext --version
```
## Testing an extension

By default it watches for changes and reloads your extension

```sh
web-ext run
```

## Run lints

```sh
web-ext lint
```

## Packaging your extension

```sh
web-ext build
```

## Get the extension signed and published

One option is to go via the [Developer Hub](https://addons.mozilla.org/en-CA/developers/)