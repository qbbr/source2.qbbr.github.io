---
layout: post
title:  "weechat - the extensible chat client"
date:   2013-07-17 13:40:00
categories: blog
---

### install (debian):

{% highlight bash %}
$ sudo aptitude install weechat
{% endhighlight %}

### configure:

#### spell

{% highlight bash %}
$ sudo aptitude install aspell-ru aspell-en
{% endhighlight %}

{% highlight bash %}
/set aspell.check.default_dict "ru, en"
/aspell enable ru,en
{% endhighlight %}

#### plugins

{% highlight bash %}
$ cd ~/.weechat/python/autoload
$ wget http://weechat.org/files/scripts/weeget.py
{% endhighlight %}

{% highlight bash %}
/python load weeget.py
{% endhighlight %}

{% highlight bash %}
/weeget install buffers.pl
{% endhighlight %}