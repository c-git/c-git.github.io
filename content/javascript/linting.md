+++
title='Linting Suppression'
date = 2022-08-19
updated = 2023-11-08
+++

# Foreword

These techniques are tested on PyCharm but some like the global variables one are known to work on NetBeans as well.

# Global variable

Source: <https://intellij-support.jetbrains.com/hc/en-us/community/posts/207070365-Configuring-inspection-Unresolved-JavaScript-variable-to-recognize-global-variables-from-external-files>

**Notice: Superseded by using `js_lib`**

Use a comma separated list of the global variables in a comment.

```javascript
/* global SpreadsheetApp, Logger, DriveApp, GmailApp, Session */
```

# Default Types supported in docstrings

Source: <https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76>

- `null`
- `undefined`
- `boolean`
- `number`
- `string`
- `Array` or `[]`
- `Object` or `{}`
- `any` (Added by me because it makes sense)

You can have a typed array: `any[]`, `number[]`, `string[]`. You could also have an array of object types: `Employee[]`.
