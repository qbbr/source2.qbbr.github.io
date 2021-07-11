---
tags: [linux, debian, openfire, java, xmpp]
author: qbbr
---

### install java:

```bash
sudo aptitude install openjdk-6-jre
```

### install openfire:

```bash
wget http://download.igniterealtime.org/openfire/openfire_3.8.2_all.deb
sudo dpkg -i openfire_3.8.2_all.deb
```

### JAVA_HOME bugfix:

add to top in `/etc/init.d/openfire`:

```bash
JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")
```

### configure:

start daemon

```bash
sudo /etc/init.d/openfire start
```

open `127.0.0.1:9090` in browser and follow instructions

### reboot && enjoy
