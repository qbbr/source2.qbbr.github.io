---
tags: [linux, debian, tor, anonymous]
author: @qbbr
---

### install tor

```bash
sudo aptitude install tor
```

### install caching web proxy

```bash
sudo aptitude install polipo
```

### configure

edit config `/etc/polipo/config`

```bash
proxyAddress = "127.0.0.1"
proxyPort = 8118
allowedClients = 127.0.0.1
allowedPorts = 1-65535
proxyName = "localhost"
cacheIsShared = false
socksParentProxy = "localhost:9050"
socksProxyType = socks5
chunkHighMark = 67108864
diskCacheRoot = ""
localDocumentRoot = ""
disableLocalInterface = true
disableConfiguration = true
dnsUseGethostbyname = yes
disableVia = true
censoredHeaders = from,accept-language,x-pad,link
censorReferer = maybe
maxConnectionAge = 5m
maxConnectionRequests = 120
serverMaxSlots = 8
serverSlots = 2
tunnelAllowedPorts = 1-65535
```

restart daemon

```bash
sudo /etc/init.d/polipo restart
```

### using

set proxy `127.0.0.1:8118` in your browser or using `iceweasel-torbutton`

for application use `usewithtor <app>`

[tor checker](https://check.torproject.org/)
