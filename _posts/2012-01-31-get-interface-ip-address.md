---
layout: post
title:  "get interface ip address"
date:   2012-01-31 02:29:00
categories: blog
tags: [linux, network, ifconfig]
---

{% highlight bash %}
$ ip -o -4 addr list eth0 | awk '{ print $4 }'
{% endhighlight %}

or

{% highlight bash %}
$ /sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'
{% endhighlight %}

for ipv6:

{% highlight bash %}
ip -o -6 addr list eth0 | awk '{ print $4 }' | head -n 1 | cut -d '/' -f 1
{% endhighlight %}

where **eth0** - interface
