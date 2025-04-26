+++
title='PyTorch'
date = 2022-09-10
updated = 2025-04-26
extra = { series = "Python" }
taxonomies = { tags = ["Python"] }
+++

# Install PyTorch

Source: <https://pytorch.org/>

Instructions from the website are:

```sh
pip3 install torch torchvision torchaudio
```

(NOT TESTED) But I suspect just the command below would be enough if all you want to do is test to see if your card is working

```sh
pip3 install torch
```

# How to test if your cuda device is working

If it's working you should see `true` and the second command should tell you the recognized device name

NB: Requires that torch is already installed

```
$ python
Python 3.9.10 (main, Mar 19 2022, 20:19:04) 
[GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> torch.cuda.is_available()
True
>>> torch.cuda.get_device_name(0)
'NVIDIA T500'
```
