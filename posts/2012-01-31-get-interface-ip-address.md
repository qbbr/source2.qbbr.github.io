---
tags: [linux, network, ifconfig]
author: @qbbr
---

```bash
ip -o -4 addr list eth0 | awk '{ print $4 }'
```

or

```bash
/sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'
```

for ipv6:

```bash
ip -o -6 addr list eth0 | awk '{ print $4 }' | head -n 1 | cut -d '/' -f 1
```

where **eth0** - interface
