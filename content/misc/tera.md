+++
title = "Tera Guide"
date=2023-10-27
updated = 2025-04-26
taxonomies = { tags = ["Misc"] }
+++

## Get everything in context

```
{{ __tera_context }}
```

## Example for loop

Source: <https://keats.github.io/tera/docs/#functions>

```
{% for i in range(end=5) -%}
{% endfor %}
```

## As String

Source: <https://keats.github.io/tera/docs/#as-str>

```
{{ value | as_str }}
```
