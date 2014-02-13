---
layout: post
title:  "create bootable usb drive from virtualbox"
date:   2013-07-18 23:27:00
categories: blog
tags: [linux, usb, virtualbox]
---

### configure

add to `/etc/initramfs-tools/modules` in your virtual machine:

{% highlight bash %}
usbcore
sd_mod
ehci_hcd
uhci_hcd
ohci_hcd
usb_storage
scsi_mod
{% endhighlight %}

update initrd:

{% highlight bash %}
$ sudo update-initramfs -u
{% endhighlight %}

### burn to usb

{% highlight bash %}
$ VBoxManage clonehd --format RAW you-virtualbox-linux-disc.vdi linux.img
$ sudo dd bs=4M if=linux.img of=/dev/sdX
{% endhighlight %}

where `/dev/sdX` is your flash drive (do not write in partition `/dev/sdX1`)

### thats all, boot from usb =)
