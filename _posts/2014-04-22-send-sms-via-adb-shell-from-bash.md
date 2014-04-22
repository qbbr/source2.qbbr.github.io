---
layout: post
title:  "send sms via adb shell from bash"
date:   2014-04-22 13:41:00
categories: blog
tags: [linux, bash, android, adb]
---

### install adb

{% highlight bash %}
$ sudo aptitude install android-tools-adb
{% endhighlight %}

### enable USB debugging mode

Settings -> Developer options -> USB debugging (x)

### sendsms.sh

{% highlight bash %}
#!/bin/bash
# using: ./sendsms.sh 89999999999 "Hello, im SMS from bash"
ADB=/usr/bin/adb
# KEYCODE_HOME
$ADB shell input keyevent 3
# open form and fill them
$ADB shell am start -a android.intent.action.SENDTO -d sms:$1 --es sms_body "$2" --ez exit_on_sent true
# sleep 1 sec
sleep 1
# KEYCODE_DPAD_RIGHT
$ADB shell input keyevent 22
# KEYCODE_ENTER
$ADB shell input keyevent 66
{% endhighlight %}

### enjoy!
