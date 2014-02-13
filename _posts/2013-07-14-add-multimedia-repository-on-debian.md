---
layout: post
title:  "add multimedia repository on debian"
date:   2013-07-14 19:52:00
categories: blog
tags: [linux, debian, multimedia]
---

### install (debian):

add to `/etc/apt/sources.list`:

{% highlight bash %}
#deb http://www.deb-multimedia.org wheezy main non-free
deb http://www.deb-multimedia.org jessie main non-free
{% endhighlight %}

install keyring && update:

{% highlight bash %}
$ sudo aptitude install deb-multimedia-keyring
$ sudo aptitude update
{% endhighlight %}

### enjoy!
