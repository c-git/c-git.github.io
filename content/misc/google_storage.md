+++
title="Google Storage"
date=2023-10-27
updated = 2024-11-12
aliases = ["/misc/google-drive"]
+++

# Suggestions to cleanup space used

NB: Be sure to empty the trash after deleting files.

See [breakdown](https://one.google.com/storage) of space used to see where the most gains can come from.

## Google Drive

For google drive if you click the link to the right of google drive (square with a diagonally up arrow), then it should take you to the list of largest files that you can start searching through.
Alternatively you can try this [quota link](https://drive.google.com/drive/quota).

## Gmail

You want to search for larger emails.
To do that you can use the advanced search feature (right side of the search box) to get a search similar to `larger:20M`.
If there are several similar large emails and you want to remove all of them you can further refine the search but be careful not to delete emails you want to keep.

# Orphaned files

The only person who can delete files that you own is you.
If someone else "deletes" one of your files from a folder that is shared with them then in the past it would just "disappear" but not be deleted and still show up in searches.
And while it's great that it was still available it also meant that it still used from your quota.
The following was meant to make it easy for me to find and decide on what to do with these files (usually delete them).

Currently, Google treats all files not in a folder inside of the tree created from the root of your "My Drive" (Doesn't include shortcuts) as unorganized.

<https://drive.google.com/drive/search?q=is%3Aunorganized%20owner%3Ame&authuser=0>

Search term:

```
is:unorganized owner:me
```
