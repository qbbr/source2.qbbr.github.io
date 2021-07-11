---
tags: [linux, debian, multimedia, ape, ogg, cue]
author: @qbbr
---

### install (debian):

[add multimedia repository](/blog/add-multimedia-repository-on-debian.html)

```bash
sudo aptitude install shntool vorbis-tools monkeys-audio
```

### using:

```bash
mac file.ape image.wav -d
shnsplit -o 'cust ext=ogg oggenc -q9 - -o %f' -f file.cue -t %t image.wav
```
