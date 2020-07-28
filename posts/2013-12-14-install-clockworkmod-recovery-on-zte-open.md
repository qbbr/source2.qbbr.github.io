---
tags: [zte_open, firefoxos, clockworkmod]
---

### install adb

```bash
sudo aptitude install android-tools-adb
```

### enable remote debugging on u ZTE Open

Settings -> Device information -> More Information -> Developer -> Remote debuging (x)

### download CWM (6.0.3.3)

```bash
wget -O /tmp/clockworkmod.img https://www.dropbox.com/s/gybczn4x4l2kgce/recovery-clockwork-6.0.3.3-roamer2.img
```

### install CWM

```bash
adb push /tmp/clockworkmod.img /sdcard/clockworkmod.img
adb shell flash_image recovery /sdcard/clockworkmod.img
```

### use me plz

Hold volume up and power button to boot into recovery mode.
