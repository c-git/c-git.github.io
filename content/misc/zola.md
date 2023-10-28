+++
title='Zola'
+++

# Summary

We are using [zola](https://www.getzola.org/) to build the documentation website.
Zola is a static site generator meaning it converts text files into formatted HTML files.
It uses [CommonMark](https://commonmark.org/help) as the source documents to be compiled into HTML.
We have some relevant markdown documented [here](@/misc/markdown.md).

# Creating links to other pages

Source: <https://www.getzola.org/documentation/content/linking/#internal-links>

A quick reference to links has been documented [here](@/misc/markdown.md#links).
Zola supports a special type of link which is an internal link.
It works by specifying the markdown file of the page you want to link to.
For example the link in the first line of this paragraph is specified by `[here](@/misc/markdown.md#links)`.
These types of links are to be preferred because they are verified to be accurate by zola while relative links are not.
Links to external websites can also be verified with `zola check`.
However, it is noteworthy that relative links do provide the ability to include `index.html` and therefore work well
with websites meant to be used without a webserver.
