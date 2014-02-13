---
layout: post
title:  "symfony2 console autocomplete"
date:   2011-09-21 23:52:00
categories: blog
tags: [linux, php, symfony2]
---

### install:

{% highlight bash %}
$ sudo aptitude install bash-completion
{% endhighlight %}

{% highlight bash %}
$ wget https://raw.github.com/qbbr/symfony2-autocomplete/master/symfony2-autocomplete.bash
$ sudo mv symfony2-autocomplete.bash /etc/bash_completion.d/
{% endhighlight %}

add the following line to your ~/.bashrc:

{% highlight bash linenos=table %}
if [ -e ~/symfony2-autocomplete.bash ]; then
. ~/symfony2-autocomplete.bash
fi
{% endhighlight %}

### see:

 * [youtube video](http://youtu.be/kL8A8VwBEog)
 * [github repo](https://github.com/qbbr/symfony2-autocomplete)
