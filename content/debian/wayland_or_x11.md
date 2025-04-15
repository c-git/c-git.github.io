+++
title = "Wayland or x11?"
date = 2024-12-23
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# How to know which you are using

Source: <https://unix.stackexchange.com/questions/202891/how-to-know-whether-wayland-or-x11-is-being-used>

Based on an [error message](https://github.com/rust-windowing/winit/blob/6896de5b73817a51c2e9311a52a571b400411602/src/platform_impl/linux/mod.rs#L323) in the rust winit crate I think the easiest way to check is see if either of the environment variables `WAYLAND_DISPLAY` or `WAYLAND_SOCKET` is set.
And the environment variable `DISPLAY` should be set if you are on x11.
So...

You get output on at least one of this if you are on Wayland:

```sh
echo $WAYLAND_DISPLAY
echo $WAYLAND_SOCKET
```

And you should get output on this if you are on x11:

```sh
echo $DISPLAY
```

The actual instruction from the site are to run

```sh
loginctl
```

Then take the value under session in the first column and insert into `<SESSION>` in the next command

```sh
loginctl show-session <SESSION> -p Type
```
