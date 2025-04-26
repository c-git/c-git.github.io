+++
title="Crate Serde"
date=2023-01-06
updated = 2025-04-26
aliases=["/rust/serde"]
extra = { series = "Rust" }
taxonomies = { tags = ["Rust"] }
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

# Enums and TOML

Source: <https://stackoverflow.com/questions/57560593/why-do-i-get-an-unsupportedtype-error-when-serializing-to-toml-with-a-manually-i>

Using `#[serde(tag = "type")]` can sometimes resolve `Err value: UnsupportedType` errors

# Transcoding

Source: <https://serde.rs/transcode.html>

Going from any self describing format to any other self describing format (Not tested yet, but wanted to be able to find it next time)

```rust
use std::io;

fn main() {
    // A JSON input with plenty of whitespace.
    let input = r#"
      {
        "a boolean": true,
        "an array": [3, 2, 1]
      }
    "#;

    // A JSON deserializer. You can use any Serde Deserializer here.
    let mut deserializer = serde_json::Deserializer::from_str(input);

    // A compacted JSON serializer. You can use any Serde Serializer here.
    let mut serializer = serde_json::Serializer::new(io::stdout());

    // Prints `{"a boolean":true,"an array":[3,2,1]}` to stdout.
    // This line works with any self-describing Deserializer and any Serializer.
    serde_transcode::transcode(&mut deserializer, &mut serializer).unwrap();
}
```
