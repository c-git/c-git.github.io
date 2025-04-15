+++
title="Cron"
date = 2022-12-07
updated = 2024-11-09
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Source: <https://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/>

# Open file to edit

```sh
crontab -e
```

# Format

```
a b c d e /path/command
```

- `a`: Minute (0-59)
- `b`: Hours (0-23)
- `c`: Day (0-31)
- `d`: Month (0-12 [12 == December])
- `e`: Day of the week(0-7 [7 or 0 == sunday])
- `/path/command` – Script or command name to schedule

## Options other than number

Source: <https://crontab.guru/every-5-minutes>

- `*` :	any value
- `,` :	value list separator
- `-` :	range of values
- `/` :	step values

Example every 5 minutes

```
*/5 * * * * date >> ~/date.txt
```

# Special @ shortcuts

Source: <https://www.linode.com/docs/guides/schedule-tasks-with-cron/#special-cron-syntaxes>

- `@reboot` statement runs the specified command once, at start up.
- `@yearly` and `@annually` both run the specified task every year at 12:00am on the 1st of January. This is equivalent
  to specifying `0 0 1 1 *` in the crontab line.
- `@daily` and `@midnight` both run the cronjob every day at 12:00am. This is equivalent to the following cron
  syntax: `0 0 * * *`.
- `@monthly` runs the job once a month, on the 1st, at 12:00am. In standard cron syntax this is equivalent to: `0 0 1 * *`.
- `@weekly` runs the job once a week at 12:00am on Sunday. This is the same as specifying `0 0 * * 0` on the crontab
  line.
- `@hourly` runs the job at the top of every hour. In standard cron syntax this is equivalent to: `0 * * * *`.

Example Usage

```
@reboot date >> ~/test_cron.txt
```

# Test Cron

## Simple Test

Open Crontab

```sh
crontab -e
```

Add line to bottom and save (Ensure there is a new line at the end of the line)

```
* * * * * date >> ~/date.txt
```

Wait one minute and confirm that it works

## More involved test that uses a script

**Overview**: Create test script and set cron to run script

Create temp folder

```sh
mkdir ~/tmp
```

Create test script

```sh
echo 'date >> ~/tmp/cron_result.txt' > ~/tmp/cron_test.sh
chmod 700 ~/tmp/cron_test.sh
ls -l ~/tmp
```

Open Crontab

```sh
crontab -e
```

Add line to bottom and save (Ensure there is a new line at the end of the line)

```
* * * * * ~/tmp/cron_test.sh
```

Wait one minute and confirm that it works

```sh
cat ~/tmp/cron_result.txt
```
