---
layout: post
title:  "install openfire on debian wheezy"
date:   2013-07-15 15:56:00
categories: blog
tags: [linux, debian, openfire, java, xmpp]
---

### install java:

{% highlight bash %}
$ sudo aptitude install openjdk-6-jre
{% endhighlight %}

### install openfire:

{% highlight bash %}
$ wget http://download.igniterealtime.org/openfire/openfire_3.8.2_all.deb
$ sudo dpkg -i openfire_3.8.2_all.deb
{% endhighlight %}

### JAVA_HOME bugfix:

add to top in `/etc/init.d/openfire`:

{% highlight bash %}
JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")
{% endhighlight %}

### configure:

start daemon

{% highlight bash %}
$ sudo /etc/init.d/openfire start
{% endhighlight %}

open `127.0.0.1:9090` in browser and follow instructions

### reboot && enjoy
