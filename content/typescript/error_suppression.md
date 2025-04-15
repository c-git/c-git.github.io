+++
title="Error Suppression"
date = 2023-04-14
updated = 2025-04-15
extra = { series = "typescript" }
taxonomies = { tags = ["typescript"] }
+++

Source: <https://bobbyhadz.com/blog/typescript-ignore-error>

Use `// @ts-expect-error` on the previous line to suppress errors. This is to be preferred over `// @ts-nocheck` (which is for a whole file) and `// @ts-ignore` which gives no warning if the error is no longer present.
