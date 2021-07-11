---
tags: [linux, debian, getty, tty]
author: @qbbr
---

### install (debian):

```bash
sudo aptitude install rungetty
```

### configure:

edit `/etc/inittab`:

```bash
#1:2345:respawn:/sbin/getty 38400 tty1
1:2345:respawn:/sbin/rungetty tty1 --autologin YOUR_USER
```

for startx on login, edit `~/.bash_profile` and at the bottom add:

```bash
if [ -z "$DISPLAY" ] && [ $(tty) = /dev/tty1 ]; then
	startx
fi
```
