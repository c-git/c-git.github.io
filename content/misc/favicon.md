+++
title = "favicon"
date = 2025-04-17
taxonomies = { tags = ["Misc"] }
updated = 2025-04-26
+++

Source: <https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs>

See site for full explanation but **TLDR** from site is:

> Instead of serving dozens of icons, all you need is just five icons and one JSON file.
>
> For the browser using HTML:
>
> ```html
> <link rel="icon" href="/favicon.ico" sizes="32x32">
> <link rel="icon" href="/icon.svg" type="image/svg+xml">
> <link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- 180×180 -->
> ```
>
> If you’re making a PWA (Progressive Web App), also add this to the HTML:
>
> ```html
> <link rel="manifest" href="/manifest.webmanifest">
> ```
>
> And a file with the web app manifest:
>
> ```json
> // manifest.webmanifest
> {
> "icons": [
> { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
> { "src": "/icon-mask.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" },
> { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
> ]
> }
> ```
>
> Maskable icons should have bigger paddings. The safe zone is a 409×409 circle. Use [maskable.app](https://maskable.app/) to check your icon.
