---
tags: [nexus_7, android, clockworkmod]
---

### install fastboot tool

```bash
sudo apt-get install android-tools-fastboot
```

### unlock the bootloader

Press volume down + power button to boot into bootloader mode  
or:

```bash
adb reboot bootloader
```

unlock (ALL DATA WILL BE REMOVED!):

```bash
sudo fastboot oem unlock
```

### download CWM (6.0.4.3)

```bash
wget -O /tmp/clockworkmod.img https://www.dropbox.com/s/73llj8n6g2vat3o/recovery-clockwork-touch-6.0.4.3-flo.img
```

### install CWM

```bash
sudo fastboot flash recovery /tmp/clockworkmod.img
```

### fix loop loading animations

in bootloader mode:

```bash
sudo fastboot format userdata
sudo fastboot format cache
```

### wow, wow, wow =)
