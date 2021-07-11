---
tags: [linux, iptables, ssh]
author: qbbr
---

### configure:

```bash
sudo iptables -A INPUT -p tcp --dport 22 -m recent --rcheck --seconds 60 --hitcount 2 --name SSH -j LOG --log-prefix "SH "
sudo iptables -A INPUT -p tcp --dport 22 -m recent --update --seconds 60 --hitcount 2 --name SSH -j DROP
sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set --name SSH -j ACCEPT
```

2 try, 60 sec delay
