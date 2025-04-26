+++
title = "Links between files"
date = 2024-02-24
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

# TLDR

- Hard links share the same data but are independent of each other in terms of the file system and deleting one doesn't affect the other
- Hard links are usually restricted to only files and withing the same file system
- Soft links are usually allowed to be dangling and can break and can also be relative or absolute
- `ln` defaults to hard links
- `ln` with `-s` will create a symbolic link instead
- It is easiest to create link from the directory where the link should be created, if that is not the case and a relative is used ensure the `-r` option is set

> Usage: ln [OPTION]... [-T] TARGET LINK_NAME
> or: ln [OPTION]... TARGET
> or: ln [OPTION]... TARGET... DIRECTORY
> or: ln [OPTION]... -t DIRECTORY TARGET...
> In the 1st form, create a link to TARGET with the name LINK_NAME.
> In the 2nd form, create a link to TARGET in the current directory.
> In the 3rd and 4th forms, create links to each TARGET in DIRECTORY.
> Create hard links by default, symbolic links with --symbolic.
> By default, each destination (name of new link) should not already exist.
> When creating hard links, each TARGET must exist. Symbolic links
> can hold arbitrary text; if later resolved, a relative link is
> interpreted in relation to its parent directory.

Example from the folder to create link in (same for directory or file)

```sh
ln -s ORIGINAL ./
```

# Hard links vs Soft Links (Symbolic Link / Symlinks)

The man page for `ln` is really good and I can't add much to it.
It links to the [full documentation][full_docs] which is also really good.

The most succinct explanation I found was on [SO](https://stackoverflow.com/questions/185899/what-is-the-difference-between-a-symbolic-link-and-a-hard-link) and is quoted below for ease of reference. The [full documentation][full_docs] linked by the man page included the same info but was longer. However the documentation is more authoritative. In particular see examples at the end of the [full documentation][full_docs].

> Underneath the file system, files are represented by inodes. (Or is it multiple inodes? Not sure.)
>
> A file in the file system is basically a link to an inode.
> A hard link, then, just creates another file with a link to the same underlying inode.
>
> When you delete a file, it removes one link to the underlying inode. The inode is only deleted (or deletable/over-writable) when all links to the inode have been deleted.
>
> A symbolic link is a link to another name in the file system.
>
> Once a hard link has been made the link is to the inode. Deleting, renaming, or moving the original file will not affect the hard link as it links to the underlying inode. Any changes to the data on the inode is reflected in all files that refer to that inode.
>
> Note: Hard links are only valid within the same File System. Symbolic links can span file systems as they are simply the name of another file.

Other good references that I found were:

- A [table on LinkedIn](https://www.linkedin.com/pulse/hard-link-soft-link-ana-maria-roman-valencia/) with the differences between hard and soft link
- [How to Determine Whether a File Is Hard Link or a Soft Link](https://www.baeldung.com/linux/file-hard-soft-link-test)

# Determine number of hard links to a file

Source:<https://ftp.gnu.org/old-gnu/Manuals/findutils-4.1/html_node/find_13.html>

Note: There more information in the source article but this is what I wanted from it.

Use `-i` on ls to see the inode number of a file.
That is actually what stores the information in the file and the file system links to that.
Use `-li` to also see how many hard links there are to the file.

## Example of checking if a file has multiple links to it

In the example below the first column is the inode number and the 3rd is the number of hard links.
`a` is separate but after `b` was created I ran `ln b c` so c is just another link to `b` and then I ran `ln -s b d` so `d` is a soft link to `b`.
If `b` goes away then `d` also stops working but `c` lives on (along with the data).

```
% ls -li
total 12
5262999 -rw-rw-r-- 1 one one 91 Feb 24 08:33 a
5304232 -rw-rw-r-- 2 one one  5 Feb 24 09:47 b
5304232 -rw-rw-r-- 2 one one  5 Feb 24 09:47 c
```

# Example of trying ln command

```sh
% echo "Text for separate file a" > a
% echo "Text for all the other files" > b
% ln b c
% ln -s b d
% ls -li
```

```
total 12
18879400 -rw-rw-r-- 1 one one 25 Feb 24 10:11 a
18879529 -rw-rw-r-- 2 one one 29 Feb 24 10:11 b
18879529 -rw-rw-r-- 2 one one 29 Feb 24 10:11 c
18879531 lrwxrwxrwx 1 one one  1 Feb 24 10:11 d -> b
```

```sh
% ls -l
```

```
total 12
-rw-rw-r-- 1 one one 25 Feb 24 10:11 a
-rw-rw-r-- 2 one one 29 Feb 24 10:11 b
-rw-rw-r-- 2 one one 29 Feb 24 10:11 c
lrwxrwxrwx 1 one one  1 Feb 24 10:11 d -> b
```

```
% cat a
Text for separate file a
% cat b
Text for all the other files
% cat c
Text for all the other files
% cat d
Text for all the other files
% rm b # Delete first copy of file
% cat c # Still works
Text for all the other files
% cat d # Broken because source file is gone
cat: d: No such file or directory
```

```sh
% ls -li
```

```
total 8
18879400 -rw-rw-r-- 1 one one 25 Feb 24 10:11 a
18879529 -rw-rw-r-- 1 one one 29 Feb 24 10:11 c
18879531 lrwxrwxrwx 1 one one  1 Feb 24 10:11 d -> b
```

[full_docs]: https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html#ln-invocation
