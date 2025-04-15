+++
title="Startup"
date = 2022-12-07
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

Making programs run on startup can be archived a few different ways. The ones documented here are the ones that have
been tested and confirmed to work.

# GUI Startup

Source: <https://help.ubuntu.com/community/AddingProgramToSessionStartup>

- Go to activities at the top left (Or press Windows key)
- Then type `startup`
- Launch `Startup Applications Prefernces`
- Click `Add`
- Supply any suitable name
- Use the `Browse...` button to find the executable that you want to run
- Click `Add`

# Cron

See the [Cron](@/debian/cron.md) page.

# Other options

Source: <https://www.baeldung.com/linux/run-command-start-up>

Not tested other than the Cron option, but they look promising so saving for future reference.
