---
tags: [linux, mount, uuid]
author: @qbbr
---

get uuid for all device:

```bash
ls -l /dev/disk/by-uuid/
```

result:

```bash
┌─[Q:qbbr][~]
└─╼ ls -l /dev/disk/by-uuid/
итого 0
lrwxrwxrwx 1 root root 10 Сен 26 05:09 019a28b3-ca4d-4be0-8e72-d8befd2ae936 -> ../../sda5
lrwxrwxrwx 1 root root 10 Сен 26 05:09 2e782133-1167-495d-b758-f75e3f868b8c -> ../../sda8
lrwxrwxrwx 1 root root 10 Сен 26 05:09 37edf9f9-0652-45be-a4de-81e44a97e6bc -> ../../sda7
lrwxrwxrwx 1 root root  9 Сен 26 06:51 5016-9138 -> ../../sdb
lrwxrwxrwx 1 root root 10 Сен 26 05:09 834bf017-f811-43f5-9ece-626d1c541860 -> ../../sda1
lrwxrwxrwx 1 root root 10 Сен 26 07:52 86a077d8-3e5b-464b-956c-25bd3da118f6 -> ../../sda6
lrwxrwxrwx 1 root root 10 Сен 26 05:09 991f208a-efb3-4c79-9030-c63636183256 -> ../../sda3
lrwxrwxrwx 1 root root 10 Сен 26 05:09 b452b0ba-3488-4802-a4df-39500527e874 -> ../../sda4
```

edit u `/etc/fstab` and replace **id** to **UUID**, example:

```bash
# <file system>                          <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/sda3 during installation
UUID=991f208a-efb3-4c79-9030-c63636183256 /               ext3    errors=remount-ro,acl 0       1
# /boot was on /dev/sda1 during installation
UUID=834bf017-f811-43f5-9ece-626d1c541860 /boot           ext2    nodev           0       2
# /home was on /dev/sda4 during installation
UUID=b452b0ba-3488-4802-a4df-39500527e874 /home           ext3    defaults        0       2
# /media/dwnlds was on /dev/sda6 during installation
UUID=86a077d8-3e5b-464b-956c-25bd3da118f6 /media/dwnlds   ext4    nodev,noexec    0       2
# /media/strg1 was on /dev/sda7 during installation
UUID=37edf9f9-0652-45be-a4de-81e44a97e6bc /media/strg1    ext3    nodev           0       2
# /media/strg2 was on /dev/sda8 during installation
UUID=2e782133-1167-495d-b758-f75e3f868b8c /media/strg2    ext3    nodev           0       2
# swap was on /dev/sda5 during installation
UUID=019a28b3-ca4d-4be0-8e72-d8befd2ae936 none            swap    sw              0       0
```
