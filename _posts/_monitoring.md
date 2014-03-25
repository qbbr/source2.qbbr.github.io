---
layout: post
title:  ""
date:   2011-09-21 23:18:00
categories: blog
---

{% highlight bash %}
$ aptitude install sysstat
iostat - показывает нагрузку на дисковую подсистему
$ aptitude install iotop
iotop -oPa - показывает процессы активно использующие дисковую подсистему

vmstat - информация о процессах, виртуальной памяти, дисках и процессорной активности

$ aptitude install atop
atop 1 | grep ^DSK - мониторинг в режиме реального времени нагрузки на диски

atopsar -d - покажет нагрузки на диски за последние сутки

hdparm -tT /dev/sda - тестирование производительности винчестера
{% endhighlight %}
