---
layout: post
title:  "add ubuntu ppa repositories in debian"
date:   2011-09-27 09:58:00
categories: blog
tags: [linux, debian, ppa]
---

### install:

{% highlight bash %}
$ wget https://raw.github.com/qbbr/debian/master/home/sokolov/scrpts/add-apt-repository
$ chmod +x add-apt-repository
$ sudo mv add-apt-repository /usr/sbin/
{% endhighlight %}

### using:

{% highlight bash %}
$ sudo add-apt-repository ppa:<ppa_name>
{% endhighlight %}

### see:

 * [file on github](https://github.com/qbbr/debian/blob/master/home/sokolov/scrpts/add-apt-repository)
