---
layout: post
title:  "autologin tty on linux"
date:   2013-07-16 22:20:00
categories: blog
tags: [linux, debian, getty, tty]
---

### install (debian):

{% highlight bash %}
$ sudo aptitude install rungetty
{% endhighlight %}

### configure:

edit `/etc/inittab`:

{% highlight bash %}
#1:2345:respawn:/sbin/getty 38400 tty1
1:2345:respawn:/sbin/rungetty tty1 --autologin YOUR_USER
{% endhighlight %}

for startx on login, edit `~/.bash_profile` and at the bottom add:

{% highlight bash %}
if [ -z "$DISPLAY" ] && [ $(tty) = /dev/tty1 ]; then
	startx
fi
{% endhighlight %}
