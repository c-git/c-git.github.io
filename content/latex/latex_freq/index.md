+++
title="LaTex Frequently used commands"
date = 2023-06-23
updated = 2023-11-08
+++

[//]: # (TODO: Add way to display the latex)

## Symbol List

[University of Oregon Symbol List](https://math.uoregon.edu/wp-content/uploads/2014/12/compsymb-1qyb3zd.pdf)

[Local Copy](University%20of%20Oregon%20Symbol%20List%20-%20compsymb-1qyb3zd.pdf)

## Aligned Math Environment

```latex
\begin{equation*}
    \begin{aligned}
        x + y &= 5 \\
        x &= 5 - y \\
    \end{aligned}
\end{equation*}
```

## Center each line individually

```latex
\begin{center}
\end{center}
```

## Centers everything in its argument

```latex
\centerline{}
```

## Bold

```latex
\textbf{}
```

## Underline

```latex
\underline{}
```

## Italic

```latex
\textit{}
```

## Summation with super and subscript

```latex
$\sum_{i=1}^{n} i$
```

## Binomial coefficient or all combinations

N Choose K

```latex
{n \choose k}
```

## Table

```latex
\begin{center}
    \begin{tabular}{ | m{8em} | m{8em}| m{8em} | m{8em} | }
        \hline
        \textbf{Operation} & \textbf{Actual cost} & \textbf{Amortized cost} & \textbf{Change in bank account}
        \\
        \hline
        1st & 2nd & 3rd & 4th \\
        \hline
    \end{tabular}
\end{center}
```

## Enumerated Document List (Alternate counting types)

```latex
\begin{enumerate}
    [label=\alph*)]
    \begin{enumerate}
        [label=\roman*)]
        \begin{enumerate}
            [label=\arabic*)]
        \end{enumerate}
    \end{enumerate}
\end{enumerate}
```

## Dots

### Writing line (like multiple full stops)

```latex
$\ldots$
```

### Vertically centered like multiple `\cdot`

```latex
$\cdots$
```

### Vertical dots

```latex
$\vdots$
```

### Diagonal dots

```latex
$\ddots$
```

## Links

### URL

Source: <https://www.overleaf.com/learn/latex/Hyperlinks>

Requires `\usepackage{hyperref}`

```latex
\url{}
\href{URL}{DISPLAYED TEXT}
```

## Vertically stacked things

Puts one thing on top of the other without a line between

```latex
\underset{bottom}{top}
```

## Brackets

```latex
\lbrace \rbrace
\langle \rangle
\lfloor \rfloor
```

## ARG MIN / MAX

```latex
\DeclareMathOperator*{\argmax}{arg\,max}
\DeclareMathOperator*{\argmin}{arg\,min}
```

## Horizontal Rule

Source: <https://tex.stackexchange.com/questions/19579/horizontal-line-spanning-the-entire-document-in-latex/19582>

### Entire width of the page

```latex
\noindent\makebox[\linewidth]{\rule{\paperwidth}{0.4pt}}
```

### 2cm long line

```latex
\noindent\rule{2cm}{0.4pt}
```

### Text width

```latex
\makebox[\linewidth]{\rule{\textwidth}{0.4pt}}
```

## Special Chars

### Lower case cursive L

```latex
$\ell$
```

## Figure

```latex
\begin{figure}[!htb]
    \centering
    \includegraphics[width=\textwidth]{filename}
    \caption{\label{fig:my-label} Caption Here}
\end{figure}
```

## Include a PDF in document

```latex
\includepdf[pages=-,pagecommand={}]{file.pdf}
```

## Start numbering from page after title

```latex
\begin{document}
    \maketitle
    \thispagestyle{empty}
    \clearpage
    \pagenumbering{arabic}
\end{document}
```
