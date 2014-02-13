---
layout: post
title:  "install binary java7 on debian wheezy"
date:   2014-01-22 09:31:00
categories: blog
tags: [linux, debian, java]
---

### configure

add to `/etc/apt/sources.list`:

{% highlight bash %}
deb http://ppa.launchpad.net/webupd8team/java/ubuntu precise main
deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu precise main
{% endhighlight %}

{% highlight bash %}
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886
{% endhighlight %}

### install

{% highlight bash %}
$ sudo aptitude update
$ sudo aptitude install oracle-java7-installer
$ sudo aptitude install oracle-java7-set-default
{% endhighlight %}
