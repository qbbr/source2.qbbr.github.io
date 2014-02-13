---
layout: post
title:  "boot from usb in virtualbox"
date:   2013-11-12 21:55:00
categories: blog
tags: [linux, virtualbox, usb]
---

### create VM disk (.vmdk)

{% highlight bash %}
$ VBoxManage internalcommands createrawvmdk -filename usb.vmdk -rawdisk /dev/sdX
{% endhighlight %}

where `/dev/sdX` is your flash drive (do not use partition /dev/sdX1)

now, `usb.vmdk` is "symbolic" link  to your usb flash disk.

### import .vmdk in VM && boot
