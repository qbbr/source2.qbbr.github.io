---
tags: [linux, usb, virtualbox]
author: @qbbr
---

### configure

add to `/etc/initramfs-tools/modules` in your virtual machine:

```bash
usbcore
sd_mod
ehci_hcd
uhci_hcd
ohci_hcd
usb_storage
scsi_mod
```

update initrd:

```bash
sudo update-initramfs -u
```

### burn to usb

```bash
VBoxManage clonehd --format RAW you-virtualbox-linux-disc.vdi linux.img
sudo dd bs=4M if=linux.img of=/dev/sdX
```

where `/dev/sdX` is your flash drive (do not write in partition `/dev/sdX1`)

### thats all, boot from usb =)
