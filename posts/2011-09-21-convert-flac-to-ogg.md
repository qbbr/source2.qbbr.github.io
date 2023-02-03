---
tags: [linux, debian, multimedia, flac, ogg]
author: qbbr
---

### install (debian):

```bash
sudo aptitude install vorbis-tools
```

### using:

```bash
cd /to/dir/with/flac/
find . -name '*.flac' -exec oggenc -q9 {} \;
# \w GNU parallel
find . -type f -name '*.flac' | parallel -j $(getconf _NPROCESSORS_ONLN) oggenc -q9 {}
```
