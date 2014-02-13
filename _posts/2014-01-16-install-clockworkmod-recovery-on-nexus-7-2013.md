---
layout: post
title:  "install ClockWorkMod recovery on Nexus 7 (2013)"
date:   2014-01-16 09:08:00
categories: blog
tags: [nexus_7, android, clockworkmod]
---

### install fastboot tool

{% highlight bash %}
$ sudo apt-get install android-tools-fastboot
{% endhighlight %}

### unlock the bootloader

Press volume down + power button to boot into bootloader mode  
or:

{% highlight bash %}
$ adb reboot bootloader
{% endhighlight %}

unlock (ALL DATA WILL BE REMOVED!):

{% highlight bash %}
$ sudo fastboot oem unlock
{% endhighlight %}

### download CWM (6.0.4.3)

{% highlight bash %}
$ wget -O /tmp/clockworkmod.img https://www.dropbox.com/s/73llj8n6g2vat3o/recovery-clockwork-touch-6.0.4.3-flo.img
{% endhighlight %}

### install CWM

{% highlight bash %}
$ sudo fastboot flash recovery /tmp/clockworkmod.img
{% endhighlight %}

### fix loop loading animations

in bootloader mode:

{% highlight bash %}
$ sudo fastboot format userdata
$ sudo fastboot format cache
{% endhighlight %}

### wow, wow, wow =)
