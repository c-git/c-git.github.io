+++
title="Touch (Set file modified date)"
date = 2022-06-02
updated = 2023-11-08
+++

Source: <https://www.thegeekstuff.com/2012/11/linux-touch-command/>

## Command

```sh
touch -t [[CC]YY]MMDDhhmm[.SS]
```

The following explains the above format:

- CC – Specifies the first two digits of the year
- YY – Specifies the last two digits of the year.
  See [2-Digit year defaults](#2-digit-year-defaults) for details, if CC is omitted.
- MM – Specifies the month
- DD – Specifies the date
- hh – Specifies the hour
- mm – Specifies the minute
- SS – Specifies the seconds

## Example

```sh
touch -t 202101291605.09 foo.txt
stat foo.txt
```

### 2 Digit year defaults

If the value of the YY is between 70 and 99,
then value of the CC digits is assumed to be 19.

If the value of the YY is between 00 and 37,
then value of the CC digits is assumed to be 20.

NB: It is not possible to set the date beyond January 18, 2038.
