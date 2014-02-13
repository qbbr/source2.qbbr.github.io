---
layout: post
title:  "enable multicast forwarding on linux"
date:   2013-07-03 00:54:00
categories: blog
tags: [linux, network]
---

### configure kernel

edit `/etc/sysctl.conf`:

{% highlight bash %}net.ipv4.ip_forward=1
net.ipv4.conf.all.mc_forwarding = 1
net.ipv4.conf.default.mc_forwarding = 1
net.ipv4.conf.lo.mc_forwarding = 1
net.ipv4.conf.eth0.mc_forwarding = 1
net.ipv4.conf.wlan0.mc_forwarding = 1
net.inet.ip.mforwarding=1
multicast_router=YES
{% endhighlight %}

### reboot os && enjoy!!
