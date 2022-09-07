---
tags: [linux, raspberrypi, python, hardware]
author: qbbr
---

[![qbbr-raspberry-pi-oled-display](/img/blog/qbbr-raspberry-pi-oled-display.jpg)](/img/blog/qbbr-raspberry-pi-oled-display.jpg){.img}<!-- nofig -->

### my hw

Display: **OLED SSD1306 128x64 (4 pins)**

Raspberry:

```bash
cat /proc/device-tree/model
#> Raspberry Pi 2 Model B Rev 1.1
uname -r
#> 5.4.51-v7+
cat /etc/os-release | grep PRETTY_NAME
#> Raspbian GNU/Linux 10 (buster)
```

### upgrade to latest Raspbian and install python3

```bash
sudo apt update
sudo apt upgrade
sudo apt install python3 python3-pip
sudo pip3 install --upgrade setuptools
python --version
#> Python 2.7.16
# set default python version, must be python3
sudo update-alternatives --install /usr/bin/python python $(which python2) 1
sudo update-alternatives --install /usr/bin/python python $(which python3) 2
sudo update-alternatives --config python
python --version
#> Python 3.7.3
pip3 --version
#> pip 18.1 from /usr/lib/python3/dist-packages/pip (python 3.7)
```

### enable i2c on kernel

```bash
sudo raspi-config
## Interfacing Options -> I2C
## enable? -> YES
# check kernel module to load
cat /etc/modules | grep i2c
#> i2c-dev
sudo reboot
```

### connect OLED to Raspberry

!!! use 3V (PIN 1), not 5V (PIN 2, PIN 4), its more safely for OLED.

| Raspberry Pi      | OLED |
|-------------------|------|
| Ground (PIN 6)    | GND  |
| 3V3 power (PIN 1) | VCC  |
| GPIO 3 (PIN 5)    | SCL  |
| GPIO 2 (PIN 3)    | SDA  |

### test i2c

```bash
# check i2c-dev
ls /dev/i2c*
#> /dev/i2c-1
sudo apt install python-smbus i2c-tools
i2cdetect -y 1
#>      0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
#> 00:          -- -- -- -- -- -- -- -- -- -- -- -- --
#> 10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
#> 20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
#> 30: -- -- -- -- -- -- -- -- -- -- -- -- 3c -- -- --
#> 40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
#> 50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
#> 60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
#> 70: -- -- -- -- -- -- -- --
# address is 0x3C
# for older models (256mb) change port to 0
#i2cdetect -y 0
```

### install SSD1306 driver

```bash
sudo pip3 install adafruit-circuitpython-ssd1306
sudo apt install python3-pil
```

### write code

oled_stats.py:

```python
#!/usr/bin/env python3
import time
import subprocess

from board import SCL, SDA
import busio
from PIL import Image, ImageDraw, ImageFont
import adafruit_ssd1306


i2c = busio.I2C(SCL, SDA)
disp = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c)
disp.fill(0)
disp.show()
image = Image.new("1", (disp.width, disp.height))
draw = ImageDraw.Draw(image)
font_height = 8
font = ImageFont.load_default()
line = 0


def clear_screen():
    global line
    line = 0
    draw.rectangle((0, 0, disp.width, disp.height), outline=0, fill=0)


def draw_line(text):
    global line
    draw.text((0, font_height * line), text, font=font, fill=255)
    line = line + 1
    #print(text)


def shell(cmd):
    return subprocess.check_output(cmd, shell=True).decode("utf-8")


while True:
    clear_screen()

    uptime = shell("""uptime -p | tr -d '\n'""")
    date = shell("""date +'%d.%m.%y %H:%M' | tr -d '\n'""")
    ip = shell("""hostname -I | awk '{printf "%s",$1}'""")
    cpu = shell("""top -b -n1 | grep 'Cpu(s)' | awk '{printf "%.2f%%",$2+$4}'""")
    mem = shell("""free -m | awk 'NR==2{printf "%s/%sMB %d%%",$3,$2,$3*100/$2 }'""")
    disk = shell("""df -h | awk '$NF=="/"{printf "%d/%dGB %s",$3,$2,$5}'""")
    docker = shell("""echo "$(docker ps -q | wc -l)/$(docker ps -q -a | wc -l)" | tr -d '\n'""")

    # draw lines
    draw_line(uptime)
    draw_line("DATE: " + date)
    draw_line("IP: " + ip)
    draw_line("CPU: " + cpu)
    draw_line("MEM: " + mem)
    draw_line("DISK: " + disk)
    draw_line("CONTAINERS: " + docker)

    # display image
    disp.image(image)
    disp.show()

    # update every 5 sec
    time.sleep(5)
```

run it

```bash
chmod +x oled_stats.py
./oled_stats.py
#> up 1 hour, 14 minutes
#> DATE: 27.09.20 21:16
#> IP: 192.168.137.150
#> CPU: 7.20%
#> MEM: 284/925MB 30%
#> DISK: 6/29GB 24%
#> CONTAINERS: 10/10
```

### run on boot

add to `/etc/rc.local`:

```bash
./home/pi/oled_stats.py &
```

enjoy!

### links

 * [Raspberry Pi Wiki](https://en.wikipedia.org/wiki/Raspberry_Pi)
 * [Raspberry Pi 2 Model B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)
 * [GPIO usage](https://www.raspberrypi.org/documentation/usage/gpio/)
 * [driver for SSD1306/SSD1305 OLED](https://github.com/adafruit/Adafruit_CircuitPython_SSD1306)
 * [SSD1306 datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
