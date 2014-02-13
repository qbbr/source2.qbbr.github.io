---
layout: post
title:  "install ClockWorkMod recovery on ZTE Open"
date:   2013-12-14 23:11:00
categories: blog
tags: [zte_open, firefoxos, clockworkmod]
---

### install adb

{% highlight bash %}
$ sudo aptitude install android-tools-adb
{% endhighlight %}

### enable remote debugging on u ZTE Open

Settings -> Device information -> More Information -> Developer -> Remote debuging (x)

### download CWM (6.0.3.3)

{% highlight bash %}
$ wget -O /tmp/clockworkmod.img https://www.dropbox.com/s/gybczn4x4l2kgce/recovery-clockwork-6.0.3.3-roamer2.img
{% endhighlight %}

### install CWM

{% highlight bash %}
$ adb push /tmp/clockworkmod.img /sdcard/clockworkmod.img
$ adb shell flash_image recovery /sdcard/clockworkmod.img
{% endhighlight %}

### use me plz

Hold volume up and power button to boot into recovery mode.
