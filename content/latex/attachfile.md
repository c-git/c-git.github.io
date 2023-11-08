+++
title="Attach File Inside PDF"
date = 2023-08-15
updated = 2023-11-08
+++

Source: <https://tex.stackexchange.com/questions/18271/include-binary-data>

This allows you to include (embed) a file in the output PDF like an attachment.
It is easy enough to get the base functionality.
You just add a use statement

```tex
\usepackage{attachfile}
```

then just add the attach command (in the example the file is called a.tar.xz)

```tex
\attachfile{a.tar.xz}
```

To get the file back out of the PDF I have found mixed support in readers but Firefox allows you to double click on the icon that is generated and opens a download dialog.
