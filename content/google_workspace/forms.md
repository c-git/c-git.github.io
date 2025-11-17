+++
title = "Google Forms"
date = 2025-11-16
taxonomies = { tags = ["Google Workspace"] }
extra = { series = "Google Workspace" }
+++

# Pre-fill Google Forms with Answers from Google Sheets

Source: <https://www.youtube.com/watch?v=vcEju__MPtw>

I don't add much here to what is in the video but I decided to add this article for ease of future reference and to provide a provide concise way to follow the steps without needing to re-watch the video.

1. In the three dot menu in the top right select `Pre-fill form`
2. Fill in unique "search keys" to be replaced then click `Get link` then click the `COPY LINK` button that appears at the bottom.
3. Pick a cell in your Google Sheet to store the template link and paste there
4. Use nested calls to the [`SUBSTITUTE`](https://support.google.com/docs/answer/3094215) function to replace each "search key" from above
