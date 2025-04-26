+++
title="Event Handlers"
date = 2022-12-07
updated = 2025-04-26
extra = { series = "Javascript" }
taxonomies = { tags = ["Javascript"] }
+++

# OnClick

Source: <https://developer.mozilla.org/en-US/docs/Web/API/Event/target>

See source for more details but my understanding of it is given a function

```javascript
function myOnClick(event) {
    const elementClicked = evt.target;
}
```

then that function can be set on any element and will fire for that element and all it's children and the target will
tell you which element (might be a child) that was clicked.
