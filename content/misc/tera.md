+++
title = "Tera Guide"
date=2023-10-27
updated = 2026-02-19
taxonomies = { tags = ["Misc"] }
+++

## Get everything in context

This is useful for debugging.
But be warned it includes all the content of the site so on large sites it is VERY big.

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
