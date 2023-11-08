+++
title="Get the current function's name"
date = 2022-06-02
updated = 2023-11-08
+++

Source: <https://stackoverflow.com/questions/5067604/determine-function-name-from-within-that-function-without-using-traceback>

```python
inspect.currentframe().f_code.co_name
```

