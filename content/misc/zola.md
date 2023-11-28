+++
title='Zola'
date=2023-10-27
updated = 2023-11-27
+++

# Summary

We are using [zola](https://www.getzola.org/) to build the website.
Zola is a static site generator meaning it converts text files into formatted HTML files.
It uses Markdown as the source documents to be compiled into HTML (According to the [CommonMark](https://commonmark.org/help) specification).
We have some relevant markdown documented [here](@/misc/markdown.md).

# Creating links to other pages

Source: <https://www.getzola.org/documentation/content/linking/#internal-links>

A quick reference to links in markdown has been documented [here](@/misc/markdown.md#links).
In addition zola supports a special type of link which is an internal link.
It works by specifying the markdown file of the page you want to link to.
For example the link in the first line of this paragraph is specified by `[here](@/misc/markdown.md#links)`.
These types of links are to be preferred because they are verified to be accurate by zola while relative links are not.
Links to external websites can also be verified with `zola check`.
However, it is noteworthy that relative links do provide the ability to include `index.html` and therefore work well
with websites meant to be used without a webserver.

For more information on sites meant to be used offline without a webserver see `easydocs_uglyurls` in the configuration options for [zola_easydocs_theme](https://github.com/codeandmedia/zola_easydocs_theme#provided-configurations-options)
This is not necessary if zola serve is used as that runs a basic webserver.

# Renaming files

If you publish your content but then realize you want to rename your files, you can setup aliases to redirect your pages instead of breaking links to your site.
This can be done at the page level using the `aliases` field in the [front matter](https://www.getzola.org/documentation/content/page/#front-matter). See example [source file](https://github.com/c-git/c-git.github.io/blob/main/content/rust/pattern_typestate.md?plain=1) where site was moved from [old](https://c-git.github.io/rust/typestate/) to [new](https://c-git.github.io/rust/pattern-typestate/).

```toml
aliases = ["/rust/typestate"]
```

# Messed up formatting

I've come across two cases where I got strange formatting.

## Case with checkboxes in list

I had two lists, with checkboxes separated by a space.
Without the comment the checkboxes were not next to their text.

```markdown
- [ ] 1st list Item 1
- [ ] 1st list Item 2

- [ ] 2nd list Item 1
- [ ] 2nd list Item 1

<!-- Comment fixes problem for those below -->

- [ ] 3rd list Item 1
- [ ] 3rd list Item 2
```

- [ ] 1st list Item 1
- [ ] 1st list Item 2

- [ ] 2nd list Item 1
- [ ] 2nd list Item 1

<!-- Comment fixes problem for those below -->

- [ ] 3rd list Item 1
- [ ] 3rd list Item 2

## Example for footer

I hd a footer that started after in a new paragraph and had `:` after the superscript text.
Removing `:` or not starting a new paragraph fixed it.

```markdown
Some text [^1][^2]

[^1]: Footer text\
[^2]: Footer text
```

Some text [^1][^2]

[^1]: Footer text\
[^2]: Footer text
