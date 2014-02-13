---
layout: post
title:  "convert .ape to .ogg with split via .cue"
date:   2011-09-21 23:05:00
categories: blog
tags: [linux, debian, multimedia, ape, ogg, cue]
---

### install (debian):

[add multimedia repository](/blog/add-multimedia-repository-on-debian.html)

{% highlight bash %}
$ sudo aptitude install shntool vorbis-tools monkeys-audio
{% endhighlight %}

### using:

{% highlight bash %}
$ mac file.ape image.wav -d
$ shnsplit -o 'cust ext=ogg oggenc -q9 - -o %f' -f file.cue -t %t image.wav
{% endhighlight %}
