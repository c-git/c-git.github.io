+++
title='Vectorizing an image'
date = 2026-08-01
extra = { series = "Inkscape" }
taxonomies = { tags = ["Inkscape"] }
+++

Source: Gemini (extract, the parts that worked)

# Foreword

This is meant to provide a way to take a raster image (common raster formats are BMP, JPEG, PNG) and convert it into a vector format like SVG.
There are multiple ways to do it.
This one is just one that worked for me.
Tested on Inkscape 1.1.2 (0a00cf5339, 2022-02-04).

It's important to note that <https://www.vectorizer.io> gave me a smaller more clear file but these instructions are good as a backup as that's not a free service.

# Vectorization

1. Open the image in Inkscape
2. Select the image
   - Click on the image with the Select Tool (the top black arrow on the left toolbar, shortcut S) to select it.
3. Open `Trace Bitmap`
   - Go to the top menu and select Path > Trace Bitmap... (or press Shift + Alt + B). (Opens on the right)
4. Select `Multiple scans`
5. Change `Brightness steps` to `Colors`
6. Increase the number of `Scans` depending on how many colors you have (8-16 recommended by Gemini). I found 90 worked better on my image that had gradients but be aware of the final file size. Play with it and see what works for you.
   - You can play with this number because it happens quickly
7. Check `Smooth` and `Stack`
8. (Optional) You may also want to select `Remove background`
9. Click Apply
10. It will place the generated image on top of your image so drag it to the side and delete the one at the back and bring it back to the center

# Crop image

1. ## Draw the crop shape
   - Select the Rectangle Tool from the left toolbar (or press R).
   - Draw a rectangle framing only the part you want to keep (Tip: If the rectangle fills with solid color and hides the image, reduce its opacity in the 'Fill and Stroke' panel, or use an outlined box, so you can see your framing.)
2. Select **All** Objects (The framing box you just created and the image at the back, or all if you used <https://www.vectorizer.io> as it will create multiple objects)
   - Activate the Select Tool (top black arrow, or press S).
   - Select all (Ctrl+A)OR Click the box you just drew to select it and then Shift-click on the image at the back so **BOTH** are selected.
3. Apply the Crop (Set Clip, this only hides the rest of the content)
   - With both objects selected, go to the top menu and select `Object` > `Clip` > `Set`.
4. Resize the canvas (should have a lot of empty space now)
   - Go to `File` > `Document Properties...` (or press Ctrl + Shift + D).
   - Click on `Resize page to content...`, this will open a sub menu
   - Click `Resize page to drawing or selection (Ctrl+Shift+R)`
5. Save
   - If you want to keep the hidden part which can be recovered with `Object` > `Clip` > `Release`, then just save as `Inkscape SVG`
   - If you want to permanently remove the parts that are not visible select `Optimized SVG`
   - Set the filename
   - Click `Save`
   - In the menu that pops up check `Collapse groups`
   - Click `Ok`
