---
tags: [linux, debian, multimedia]
author: qbbr
---

### install (debian):

add to `/etc/apt/sources.list`:

```bash
#deb http://www.deb-multimedia.org wheezy main non-free
deb http://www.deb-multimedia.org jessie main non-free
```

install keyring && update:

```bash
sudo aptitude install deb-multimedia-keyring
sudo aptitude update
```

### enjoy!
