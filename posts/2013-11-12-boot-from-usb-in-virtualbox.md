---
tags: [linux, virtualbox, usb]
---

### create VM disk (.vmdk)

```bash
VBoxManage internalcommands createrawvmdk -filename usb.vmdk -rawdisk /dev/sdX
```

where `/dev/sdX` is your flash drive (do not use partition /dev/sdX1)

now, `usb.vmdk` is "symbolic" link  to your usb flash disk.

### import .vmdk in VM && boot
