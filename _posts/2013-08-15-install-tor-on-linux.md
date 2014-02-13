---
layout: post
title:  "install tor on linux"
date:   2013-08-15 11:16:00
categories: blog
tags: [linux, debian, tor, anonymous]
---

### install tor

{% highlight bash %}
$ sudo aptitude install tor
{% endhighlight %}

### install caching web proxy

{% highlight bash %}
$ sudo aptitude install polipo
{% endhighlight %}

### configure

edit config `/etc/polipo/config`

{% highlight bash linenos=table %}
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
{% endhighlight %}

restart daemon

{% highlight bash %}
$ sudo /etc/init.d/polipo restart
{% endhighlight %}

### using

set proxy `127.0.0.1:8118` in your browser or using `iceweasel-torbutton`

for application use `usewithtor <app>`

[tor checker](https://check.torproject.org/)
