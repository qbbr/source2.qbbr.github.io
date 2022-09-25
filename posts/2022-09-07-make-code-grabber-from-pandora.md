---
tags: [hack, hardware, code-grabber]
author: qbbr
---

<div class="row">
<div class="column">
[![qbbr-make-code-grabber-1](/img/blog/code-grabber/1.jpg)](/img/blog/code-grabber/1.jpg){.img}<!-- nofig -->
</div>
<div class="column">
[![qbbr-make-code-grabber-2](/img/blog/code-grabber/2.jpg)](/img/blog/code-grabber/2.jpg){.img}<!-- nofig -->
</div>
</div>

### need

 * [Pandora D-605](https://www.pandora-alarm.ru/catalog/other/breloki/brelok_lcd_605_dlya_pandora_dxl_3970_pro.html) (keychain)
 * [SEGGER JLINK/JTAG](https://www.segger.com/products/debug-probes/j-link/) (programmer)
 * [JFLASH JLINK 6.12a](https://www.segger.com/products/debug-probes/j-link/technology/flash-download/) (soft)
 * firmware (see in darknet)
 * hands not in `/dev/ass`
 * f*cking m$ windows (im using win7 32bit)

### pinout JTAG interface to keychain

<div class="row">
<div class="column">
[![qbbr-make-code-grabber-3](/img/blog/code-grabber/3.jpg)](/img/blog/code-grabber/3.jpg){.img}<!-- nofig -->
[![qbbr-make-code-grabber-5](/img/blog/code-grabber/5.jpg)](/img/blog/code-grabber/5.jpg){.img}<!-- nofig -->
</div>
<div class="column">
[![qbbr-make-code-grabber-4](/img/blog/code-grabber/4.jpg)](/img/blog/code-grabber/4.jpg){.img}<!-- nofig -->
</div>
</div>

 * *keychain* - 6pins interface
 * *JTAG* - 20pin interface

| keychain PINs |         | JTAG PINs |
|---------------|---------|-----------|
| 1             | GND     | 18, 20    |
| 2             | VCC     | 1         |
| 3             | RESET   | 15        |
| 4             | CLK/TCK | 9         |
| 5             | DIO/TMS | 7         |
| 6             | SWO/TDO | 13        |

### flashing device

!!! do not forget take out the battery from keychain.

 1. connect keychain to programmer
 2. connect SEGGER programmer to PC and wait to initialise device/driver
 3. connect **mini-USB** on keychain and wait (red led must is on), hold button 1 on keychain (for shutdown) and wait for PC initialise (beep new device)
 4. start JFLASH soft, set cpu is **EFM32LG995F256** (32 bit / 48 Mhz) and **SWD** speed to **4000**
    1. unlock chip
    2. erase chip
    3. flash `.bin` firmware
    4. lock chip
 5. prank gone right xD

### enjoy

<div class="row">
<div class="column">
[![qbbr-make-code-grabber-6](/img/blog/code-grabber/6.jpg)](/img/blog/code-grabber/6.jpg){.img}<!-- nofig -->
</div>
</div>

only just for fun ^_^
