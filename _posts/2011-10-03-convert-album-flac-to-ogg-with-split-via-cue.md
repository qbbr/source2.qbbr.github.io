---
layout: post
title:  "convert album .flac to .ogg with split via .cue"
date:   2011-10-03 02:23:00
categories: blog
tags: [linux, debian, multimedia, flac, ogg, cue]
---

### install (debian):

{% highlight bash %}
$ sudo apt-get install cuetools shntool vorbis-tools
{% endhighlight %}

### using:

split album **.flac** file into separate tracks:

{% highlight bash %}
$ cuebreakpoints sample.cue | shnsplit -o flac sample.flac
{% endhighlight %}

fill flac tags (if present):

{% highlight bash %}
$ cuetag sample.cue split-track*.flac
{% endhighlight %}

and convert splited **.flac** to **.ogg**

{% highlight bash %}
$ find . -name 'split-track*.flac' -exec oggenc -q9 {} \;
{% endhighlight %}
