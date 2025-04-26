+++
title='Compressed Files'
date = 2023-07-28
updated = 2025-04-26
extra = { series = "Debian" }
taxonomies = { tags = ["Debian"] }
+++

# Compressing files

## Using target file extension

Only tested and confirmed to work with:

- `.tar.xz`
- `.tar.gz`

```sh
tar -caf archive.tar.xz file1 file2 file3
```

Can be used with * to include all files in folder

```sh
tar -caf archive.tar.xz *
```

## Specify compression

### Compression options

```
 -a, --auto-compress        use archive suffix to determine the compression program
-j, --bzip2                filter the archive through bzip2
-J, --xz                   filter the archive through xz
    --lzip                 filter the archive through lzip
    --lzma                 filter the archive through xz
    --lzop                 filter the archive through lzop
    --zstd                 filter the archive through zstd
-z, --gzip, --gunzip, --ungzip   filter the archive through gzip
```

### Example

```sh
tar -cf archive.tar.xz file1 file2 file3 --xz
```

# Extracting files

## TAR

```sh
tar -xf archive.tar.xz
```

### Tar relevant switches

Taken from help message

- `-x, --extract, --get       extract files from an archive`
- `-c, --create               create a new archive`
- `-f, --file=ARCHIVE         use archive file or device ARCHIVE`
- `-a, --auto-compress        use archive suffix to determine the compression program`
- `-z, --gzip, --gunzip, --ungzip   filter the archive through gzip`
- `-v, --verbose              verbosely list files processed`

## Zip

```sh
unzip archive.zip
```

# Uncompress .Z files

Source: <https://www.linuxfordevices.com/tutorials/linux/uncompress-z-file>

```sh
uncompress archive.z
```

or

```sh
gzip -d archive.z
```
