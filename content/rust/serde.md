+++
title="Serde"
+++

Tips and Tricks for working with `Serde`.

# Attributes

Website: <https://serde.rs/attributes.html>

## Specially noted Container attributes

[Rename All](https://serde.rs/container-attrs.html#rename_all)

```
#[serde(rename_all = "lowercase")]
```

[Default](https://serde.rs/container-attrs.html#default) - Use default for any missing fields

```
#[serde(default)]
```

## Specially noted Field attributes

[Rename](https://serde.rs/field-attrs.html#rename)

```
#[serde(rename = "name")]
```

[Alias](https://serde.rs/field-attrs.html#alias)

```
#[serde(alias = "name")]
```

[Path](https://serde.rs/field-attrs.html#default--path) - Use callable to set default value if field not found. This may
also be a trait method.

```
#[serde(default = "path")]
```

[Default](https://serde.rs/field-attrs.html#default) - Use `Default::default()` if not present. See
also [default value for a field](https://serde.rs/attr-default.html)

```
#[serde(default)]
```

# Snippets

- [Derive](@/rust/snippets.md#derive-serde)

# Enums and TOML

Source: <https://stackoverflow.com/questions/57560593/why-do-i-get-an-unsupportedtype-error-when-serializing-to-toml-with-a-manually-i>

Using `#[serde(tag = "type")]` can sometimes resolve `Err value: UnsupportedType` errors

