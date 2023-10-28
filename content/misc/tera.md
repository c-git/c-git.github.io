+++
title = "Tera Guide"
+++

## Get everything in context

```
{{ __tera_context }}
```

## Example for loop

Source: <https://tera.netlify.app/docs/#functions>

```
{% for i in range(end=5) -%}
{% endfor %}
```

## As String

Source: <https://tera.netlify.app/docs/#as-str>

```
{{ value | as_str }}
```