---
tags: [linux, network]
author: qbbr
---

### configure kernel

edit `/etc/sysctl.conf`:

```bashnet.ipv4.ip_forward=1
net.ipv4.conf.all.mc_forwarding = 1
net.ipv4.conf.default.mc_forwarding = 1
net.ipv4.conf.lo.mc_forwarding = 1
net.ipv4.conf.eth0.mc_forwarding = 1
net.ipv4.conf.wlan0.mc_forwarding = 1
net.inet.ip.mforwarding=1
multicast_router=YES
```

### reboot os && enjoy!!
