---
tags: [linux, debian, mount, usb]
---

### install

```bash
sudo aptitude install usbmount
```

### configure

edit `/etc/usbmount/usbmount.conf`:

```bash
FILESYSTEMS="vfat ext2 ext3 ext4 hfsplus ntfs"
MOUNTOPTIONS="noexec,nodev,noatime,nodiratime,defaults"
```

### connect u usb && PROFIT!

umount:

```bash
sudo umount /media/usbX
```
