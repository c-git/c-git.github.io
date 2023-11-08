+++
title="Memory"
date = 2023-08-16
updated = 2023-11-08
+++

Source: <https://docs.python.org/3/library/tracemalloc.html>

See excerpt from introductory paragraph

> To trace most memory blocks allocated by Python, the module should be started as early as possible by setting the [PYTHONTRACEMALLOC](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONTRACEMALLOC) environment variable to 1, or by using [-X](https://docs.python.org/3/using/cmdline.html#cmdoption-X) tracemalloc command line option. The [tracemalloc.start()](https://docs.python.org/3/library/tracemalloc.html#tracemalloc.start) function can be called at runtime to start tracing Python memory allocations.

See [docs](https://docs.python.org/3/library/tracemalloc.html#record-the-current-and-peak-size-of-all-traced-memory-blocks) for full example

```py
import tracemalloc

tracemalloc.start()

size, peak = tracemalloc.get_traced_memory()
```
