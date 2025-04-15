+++
title = "Markdown / HTML Guide"
date=2023-10-27
updated = 2024-01-14
extra = { series = "misc" }
taxonomies = { tags = ["misc"] }
+++

# Official Docs

[CommonMark][common_mark]

[Extended Syntax][extended_syntax]

# Styles supported in discord messages

Source: <https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline->

| Style                      | Markdown                           |
| -------------------------- | ---------------------------------- |
| _Italics_                  | `*italics* or _italics_`           |
| **Bold**                   | `**bold**`                         |
| _**Bold Italics**_         | `_**bold italics**_`               |
| Underline [^1]             | `__underline__`                    |
| **_Underline italics_**    | `**_underline italics_**`          |
| Underline bold[^1]         | `__**underline bold**__`           |
| underline bold italics[^1] | `__***underline bold italics***__` |
| ~~Strikethrough~~          | `~~Strikethrough~~`                |
| Spoiler [^2]               | \|\|Spoiler\|\|                    |

[^1]: Not supported in [CommonMark][common_mark]. `__some text__` is treated as bold in common mark so all underline variants only get a bold added to them in addition to the other styling specified.

[^2]: Not supported in [CommonMark][common_mark]. `|` is used for tables in the [Extended Syntax][extended_syntax]

Discord also supports the following:

- \`One line code blocks\`
- \`\`\` Multiline code blocks \`\`\`
- \> Block quotes
- \>\>\> Multiline block quotes \>\>\>

# Not in spec but needed in practice

## Newline

Add a `\` at the end of the line to create a new line.
Note it must not have any characters after it including spaces.

```markdown
first line\
second line
```

### Displayed as

first line\
second line

# Alternate explanations for quick reference

## Links

### Single use on page

```markdown
Normal Link: [DISPLAYED TEXT](https://link.com)
Image Link: ![ALT TEXT](https://img_link.com)
```

### Multiple Uses

Prefer this style if a link is used multiple times as it would only need to be updated in one place.
The same works for image links just prefix with `!`.

To use the link you just put the display text and a reference to the link that will be defined later

```markdown
[DISPLAYED TEXT FIRST TIME][1]
[DISPLAYED TEXT SECOND TIME][1]
```

The later (preferably at the bottom of the section or page)

```markdown
[1]: https://link.com
```

## Checklist

{{ enable_checkboxes() }}
{{ checkboxes_nesting_behaviour() }}

- [ ] Item 1
- [ ] Item 2
- [x] Item 3 (Checked)
  - [x] Sub Item 1
  - [x] Sub Item 2
  - [x] Sub Item 3

```markdown
- [ ] Item 1
- [ ] Item 2
- [x] Item 3 (Checked)
  - [x] Sub Item 1
  - [x] Sub Item 2
  - [x] Sub Item 3
```

### Enabling Checkboxes

If you want the checkboxes enabled for use to be clickable then use the following snippet.
This will pull in the shortcode which will run a differed script that enables all the checkboxes on the page.
Because it is deferred it doesn't matter where on the page it is placed it will still work.
It is also written such that it is idempotent and placing / running it twice will not have any additional effect. This
has been executed on this page, hence why checkboxes above work.

```markdown
{{/* enable_checkboxes() */}}
```

### Enabling Expected Nested Checkbox Behaviour

If you click a checkbox which has checkboxes listed under it, you expect them to become checked as well. And if you
uncheck a checkbox you expect all its ancestors to become unchecked as well. The following shortcode provides that
functionality. This has also been enabled on this page so functionality can be tested on the above checkboxes.

```markdown
{{/* checkboxes_nesting_behaviour() */}}
```

## Collapsable sections

Source: <https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab>

### WARNING

- Be careful with **indentation** otherwise you can end up with a code block and hence raw markdown.
- Empty line required after `</summary>` tag based on my test or again you get raw markdown.

<details>
  <summary>Click to expand!</summary>

Detailed body shows when you click.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim lorem, placerat sed vestibulum a, pellentesque
at leo. Vivamus tincidunt nisi massa, nec pellentesque diam mollis vel. Vestibulum turpis mauris, placerat id lectus ac,
varius imperdiet libero. Ut tortor lorem, scelerisque eu elit vitae, eleifend gravida justo. Cras risus est, maximus non
dapibus quis, placerat ullamcorper diam. Ut vitae justo purus. Donec enim dolor, sodales et tempor vehicula, rutrum
vitae eros. Praesent commodo urna vitae pretium venenatis. Praesent lectus est, finibus sed lobortis at, finibus sit
amet velit. Maecenas varius tincidunt neque, sed ultricies lectus cursus ut. Phasellus auctor fermentum venenatis.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu velit consectetur,
pretium ipsum eget, pharetra massa. Duis sed posuere nisl. Proin a pharetra sapien, sit amet sollicitudin nisi. Nulla
dolor nunc, interdum id convallis vitae, maximus ac elit.

Proin ullamcorper lorem id dui commodo hendrerit. Etiam vitae commodo ipsum. Aliquam placerat ex sed dolor eleifend, id
pulvinar lorem dictum. Duis in massa tortor. Maecenas leo quam, luctus at egestas ac, tincidunt a odio. Pellentesque
cursus mi egestas leo viverra egestas. Nulla quis velit sit amet tellus aliquet mollis sed sed justo. Vivamus interdum
porta ultricies. Nulla quis ex in arcu consequat auctor quis et ligula. Phasellus pellentesque nibh quis risus pretium
malesuada.
**Generated 2 paragraphs, 219 words, 1490 bytes of [Lorem Ipsum](https://www.lipsum.com/)**

</details>

```
<details>
  <summary>Click to expand!</summary>

  Must have an empty line before this line (based on my tests)
  Detailed body shows when you click.

</details>
```

## Footnotes

Source: <https://www.markdownguide.org/extended-syntax/#footnotes>

The Markdown parser used by zola does not appear to support multiple paragraphs in footnotes.
Also, it is probably best to not use numbers as the identifier for a footnote because they are numbered by order of
appearance and using number may cause confusion.

See the following example and the code to generate it below.

---

Here's a simple footnote,[^note_id] and here's a longer one.[^other_note_id]

[^note_id]: This is the first footnote.

[^other_note_id]: Other text.

---

```markdown
---

Here's a simple footnote,[^note_id] and here's a another one.[^other_note_id]

[^note_id]: This is the first footnote.

[^other_note_id]: Other text.

---
```

# Tables

Source: <https://www.markdownguide.org/extended-syntax/#tables>

Tables are created by surrounding text with `|` and alignment is controlled by `:`. Note white space is still ignored, and white space alignment formatting was done by IDE and is not required.

```
| Syntax                          |     Description     |                         Test Text |
| :------------------------------ | :-----------------: | --------------------------------: |
| Header                          | Title, a lil longer | Here's this, a bit longer to show |
| Paragraph, a bit longer to show |        Text         |                          And more |
```

| Syntax                          |     Description     |                         Test Text |
| :------------------------------ | :-----------------: | --------------------------------: |
| Header                          | Title, a lil longer | Here's this, a bit longer to show |
| Paragraph, a bit longer to show |        Text         |                          And more |

[common_mark]: https://commonmark.org/help
[extended_syntax]: https://www.markdownguide.org/extended-syntax/
