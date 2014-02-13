---
layout: post
title:  "automatic mount usb on linux"
date:   2013-07-03 22:27:00
categories: blog
tags: [linux, debian, mount, usb]
---

### install

{% highlight bash %}
$ sudo aptitude install usbmount
{% endhighlight %}

### configure

edit `/etc/usbmount/usbmount.conf`:

{% highlight bash %}
FILESYSTEMS="vfat ext2 ext3 ext4 hfsplus ntfs"
MOUNTOPTIONS="noexec,nodev,noatime,nodiratime,defaults"
{% endhighlight %}

### connect u usb && PROFIT!

umount:

{% highlight bash %}
$ sudo umount /media/usbX
{% endhighlight %}
