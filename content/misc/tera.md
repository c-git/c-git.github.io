+++
title = "Tera Guide"
date=2023-10-27
updated = 2026-11-25
taxonomies = { tags = ["Misc"] }
+++

## Get everything in context

**SEEMS THERE IS A NEW VERSION OF TERA AND THIS PAGE HAS NOT BEEN UPDATED AS A RESULT MAY NO LONGER BE VALID, NOTICED BECAUSE LINKS ARE BROKEN**

This is useful for debugging.
But be warned it includes all the content of the site so on large sites it is VERY big.

```
{{ __tera_context }}
```

## Example for loop

**SEEMS THERE IS A NEW VERSION OF TERA AND THIS PAGE HAS NOT BEEN UPDATED AS A RESULT MAY NO LONGER BE VALID, NOTICED BECAUSE LINKS ARE BROKEN**

Source: <https://keats.github.io/tera/docs/#functions>

```
{% for i in range(end=5) -%}
{% endfor %}
```

## As String

**SEEMS THERE IS A NEW VERSION OF TERA AND THIS PAGE HAS NOT BEEN UPDATED AS A RESULT MAY NO LONGER BE VALID, NOTICED BECAUSE LINKS ARE BROKEN**

Source: <https://keats.github.io/tera/docs/#as-str>

```
{{ value | as_str }}
```
