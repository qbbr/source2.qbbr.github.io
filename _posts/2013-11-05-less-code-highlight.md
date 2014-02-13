---
layout: post
title:  "less code highlight"
date:   2013-11-05 09:19:00
categories: blog
tags: [linux, less]
---

### install

{% highlight bash %}
$ sudo aptitude install source-highlight
{% endhighlight %}

### configure

add to .bashrc:

{% highlight bash %}
export LESSOPEN='| /usr/share/source-highlight/src-hilite-lesspipe.sh %s'
export LESS=' -R '
{% endhighlight %}
