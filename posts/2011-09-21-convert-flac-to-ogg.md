---
tags: [linux, debian, multimedia, flac, ogg]
---

### install (debian):

```bash
sudo aptitude install vorbis-tools
```

### using:

```bash
cd /to/dir/with/flac/
find . -name '*.flac' -exec oggenc -q9 {} \;
```
