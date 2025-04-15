+++
title = "Presentation Animation Removal"
date = 2024-10-09
extra = { series = "misc" }
taxonomies = { tags = ["misc"] }
updated = 2025-04-15
+++

I prefer create slides with animations to help the viewers follow the part of the slide I'm referring to.
However, if you need a PDF version without animations then it becomes necessary to remove split the slides with animations into multiple slides.
The following is the sequence of steps I used to do this as it takes a lot of the concentration out of the process making it more bearable.

{{ enable_checkboxes() }}
{{ checkboxes_nesting_behaviour() }}

For each slide do:

- [ ] Remove the parts related to the pervious animations (Not applicable if not a duplicate of a page with animations from one of the other steps)
  - [ ] Delete speaker notes from previous page (previous duplicate)
  - [ ] Delete next set on animations that cause things to appear in a single click
  - [ ] Delete items on the page that have disappear animations in that same single click
- [ ] Duplicate the page if it has at least one more click
- [ ] Ensure focus is on the earlier version of the page just duplicated
- [ ] Clear the speaker notes for the following clicks
- [ ] Delete items that have appear click animations
- [ ] Delete any animations that remove items
- [ ] Go to the next page
