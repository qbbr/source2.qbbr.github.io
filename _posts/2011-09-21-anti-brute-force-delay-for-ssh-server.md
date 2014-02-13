---
layout: post
title:  "anti brute-force delay for ssh server"
date:   2011-09-21 23:25:00
categories: blog
tags: [linux, iptables, ssh]
---

### configure:

{% highlight bash %}
$ sudo iptables -A INPUT -p tcp --dport 22 -m recent --rcheck --seconds 60 --hitcount 2 --name SSH -j LOG --log-prefix "SH "
$ sudo iptables -A INPUT -p tcp --dport 22 -m recent --update --seconds 60 --hitcount 2 --name SSH -j DROP
$ sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set --name SSH -j ACCEPT
{% endhighlight %}

2 try, 60 sec delay
