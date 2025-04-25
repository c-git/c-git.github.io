+++
title = "VeraCrypt"
date = 2024-01-11
taxonomies = { tags = ["misc"] }
updated = 2025-04-25
+++

# Sizes of Created Encrypted file containers

Foreword: Created a file container and then tried to copy the files in and got informed the files couldn't fit even though I'd left quite a bit of headroom.
Then noticed a lot of space from what I selected was missing.
This is the second time this happened to me and decided to write it down for next time.

# Procedure

Objective create multiple containers all set to the same size to compare the container sizes produced

1. Create an encrypted file container
2. Standard VeraCrypt volume
3. Volume Size
   1. `10 MiB`
   2. `100 MiB`
   3. `1000 MiB`
4. Select Format
   2. Linux Ext4
   1. FAT
   2. NTFS

# Summary

- Available taken from `df`
- Percentages taken from Disk (Seems to be using full size)

| Filesystem | Avail at 10 | Avail at 100 | Avail at 1000 |
| :--------- | ----------: | -----------: | ------------: |
| Ext4       |        4.5M |          83M |          900M |
| FAT        |    **9.7M** |      **99M** |      **998M** |
| NTFS       |        7.4M |          98M |          995M |

# Results

All size in VeraCrypt UI: `9.8 MiB`, `99 MiB`, `999 MiB`

All Size in `ls -l` 10,485,760 = 10, 104,857,600 = 100, 1,048,576,000 = 1000 (if divided by 1024 twice)

- Slot 1 = Ext4, 10 MiB
- Slot 2 = FAT, 10 MiB
- Slot 3 = NTFS, 10 MiB
- Slot 4 = Ext4, 100 MiB
- Slot 5 = FAT, 100 MiB
- Slot 6 = NTFS, 100 MiB
- Slot 7 = Ext4, 1000 MiB
- Slot 8 = FAT, 1000 MiB
- Slot 9 = NTFS, 1000 MiB

```
$ df -h
Filesystem                   Size  Used Avail Use% Mounted on
/dev/mapper/veracrypt1       5.2M   24K  4.5M   1% /media/veracrypt1
/dev/mapper/veracrypt2       9.7M     0  9.7M   0% /media/veracrypt2
/dev/mapper/veracrypt3       9.8M  2.5M  7.4M  26% /media/veracrypt3
/dev/mapper/veracrypt4        90M   24K   83M   1% /media/veracrypt4
/dev/mapper/veracrypt5        99M  1.0K   99M   1% /media/veracrypt5
/dev/mapper/veracrypt6       100M  2.5M   98M   3% /media/veracrypt6
/dev/mapper/veracrypt7       966M   24K  900M   1% /media/veracrypt7
/dev/mapper/veracrypt8       998M  4.0K  998M   1% /media/veracrypt8
/dev/mapper/veracrypt9      1000M  5.5M  995M   1% /media/veracrypt9
```

```
$ df -H
Filesystem                   Size  Used Avail Use% Mounted on
/dev/mapper/veracrypt1       5.4M   25k  4.7M   1% /media/veracrypt1
/dev/mapper/veracrypt2        11M     0   11M   0% /media/veracrypt2
/dev/mapper/veracrypt3        11M  2.6M  7.7M  26% /media/veracrypt3
/dev/mapper/veracrypt4        94M   25k   87M   1% /media/veracrypt4
/dev/mapper/veracrypt5       104M  1.1k  104M   1% /media/veracrypt5
/dev/mapper/veracrypt6       105M  2.6M  103M   3% /media/veracrypt6
/dev/mapper/veracrypt7       1.1G   25k  944M   1% /media/veracrypt7
/dev/mapper/veracrypt8       1.1G  4.1k  1.1G   1% /media/veracrypt8
/dev/mapper/veracrypt9       1.1G  5.8M  1.1G   1% /media/veracrypt9
```

```
$ df
Filesystem                  1K-blocks      Used Available Use% Mounted on
/dev/mapper/veracrypt1           5244        24      4528   1% /media/veracrypt1
/dev/mapper/veracrypt2           9928         0      9928   0% /media/veracrypt2
/dev/mapper/veracrypt3           9980      2500      7480  26% /media/veracrypt3
/dev/mapper/veracrypt4          91600        24     84432   1% /media/veracrypt4
/dev/mapper/veracrypt5         101328         1    101327   1% /media/veracrypt5
/dev/mapper/veracrypt6         102140      2500     99640   3% /media/veracrypt6
/dev/mapper/veracrypt7         988776        24    921184   1% /media/veracrypt7
/dev/mapper/veracrypt8        1021728         4   1021724   1% /media/veracrypt8
/dev/mapper/veracrypt9        1023740      5596   1018144   1% /media/veracrypt9
```
