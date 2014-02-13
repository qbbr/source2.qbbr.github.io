---
layout: post
title:  "convert .flac to .ogg"
date:   2011-09-21 23:09:00
categories: blog
tags: [linux, debian, multimedia, flac, ogg]
---

### install (debian):

{% highlight bash %}
$ sudo aptitude install vorbis-tools
{% endhighlight %}

### using:

{% highlight bash %}
$ cd /to/dir/with/flac/
$ find . -name '*.flac' -exec oggenc -q9 {} \;
{% endhighlight %}
