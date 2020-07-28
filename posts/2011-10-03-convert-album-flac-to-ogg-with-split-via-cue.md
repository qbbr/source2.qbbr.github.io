---
tags: [linux, debian, multimedia, flac, ogg, cue]
---

### install (debian):

```bash
sudo apt-get install cuetools shntool vorbis-tools
```

### using:

split album **.flac** file into separate tracks:

```bash
cuebreakpoints sample.cue | shnsplit -o flac sample.flac
```

fill flac tags (if present):

```bash
cuetag sample.cue split-track*.flac
```

and convert splited **.flac** to **.ogg**

```bash
find . -name 'split-track*.flac' -exec oggenc -q9 {} \;
```
