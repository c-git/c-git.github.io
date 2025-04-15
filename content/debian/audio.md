+++
title='Audio'
date = 2022-10-12
updated = 2025-04-15
extra = { series = "debian" }
taxonomies = { tags = ["debian"] }
+++

# Multiple Outputs

Source: <https://linuxconfig.org/how-to-enable-multiple-simultaneous-audio-outputs-on-pulseaudio-in-linux>

Output audio to more than one device at a time

```sh
sudo apt install paprefs
paprefs
pulseaudio -k
pulseaudio -D
```

# Noise Cancellation

Source: <https://youtu.be/lTodCeVAfpI>

## Edit pulse config

```
sudo nano /etc/pulse/default.pa
```

### Add the following text at the bottom

```
load-module module-echo-cancel source_name=noechosource sink_name=noechosink
set-default-source noechosource
```

The article video also recommended setting the default sink but wasn't appropriate for me

```
set-default-sink noechosink
```

## Then restart pulse audio

```sh
pulseaudio -k
```
