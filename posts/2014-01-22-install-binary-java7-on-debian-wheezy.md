---
tags: [linux, debian, java]
author: @qbbr
---

### configure

add to `/etc/apt/sources.list`:

```bash
deb http://ppa.launchpad.net/webupd8team/java/ubuntu precise main
deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu precise main
```

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886
```

### install

```bash
sudo aptitude update
sudo aptitude install oracle-java7-installer
sudo aptitude install oracle-java7-set-default
```
