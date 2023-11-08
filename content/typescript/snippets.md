+++
title="Snippets"
date = 2023-04-17
updated = 2023-11-08
+++

Includes Google App Script (gscript)

# Exhaustive Matching

Source: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking>

```ts
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

# Sleep in Google App Script (gscript)

Source: <https://developers.google.com/apps-script/reference/utilities/utilities#sleepmilliseconds>

```ts
Utilities.sleep(milliseconds);
```

# Google Script Simple Trigger
## On Open

Putting it at the top outside of the namespace in `shared.ts` is the convention in use

```ts
function onOpen() {
    const menu = SpreadsheetApp.getUi().createMenu('Scripts');
    menu.addItem('Displayed Text', 'functionName').addToUi();
    menu.addItem('Button 2', 'functionName2').addToUi();
}
```

## On Edit

```ts
function onEditBody(e: GoogleAppsScript.Events.SheetsOnEdit) {
        if (
            (e.range.getColumn() !== OUTPUT_COL_DATE) &&
            (e.range.getColumn() !== OUTPUT_COL_TIME_START) &&
            (e.range.getColumn() !== OUTPUT_COL_TIME_END) &&
            (e.range.getWidth() === 1) &&
            (e.range.getHeight() === 1)) {
            // TODO: Do the needful (not variables above not automatically defined)
        }
    }
```
