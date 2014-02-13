---
layout: post
title:  "convert .iso.wv to .ogg with split via .cue"
date:   2013-07-10 21:38:00
categories: blog
tags: [linux, debian, multimedia, iso.wv, ogg, cue]
---

### install (debian):

{% highlight bash %}
$ sudo aptitude install shntool vorbis-tools wavpack
{% endhighlight %}

### using:

{% highlight bash %}
$ wvunpack -cc file.iso.wv
$ shnsplit -o 'cust ext=ogg oggenc -q9 - -o %f' -f file.cue -t %t file.wav
{% endhighlight %}

convert **.iso.wv** to **.ogg** with auto rename **.ogg** files:

{% highlight bash linenos=table %}
#!/bin/sh
# ./isowv2ogg

FILE=$1
TMP_DIR=tmp
mkdir tmp
wvunpack -cc $1 -o $TMP_DIR/
cd $TMP_DIR
CUE=`find . -name '*.cue'`
WAV=`find . -name '*.wav'`
YEAR=`cat $CUE | grep DATE | awk '{ print $3 }'`
ALBUM=`cat $CUE | grep TITLE | head -n 1 | sed 's/TITLE //' | sed  's/"//g'`
echo $ALBUM
shnsplit -o 'cust ext=ogg oggenc -q9 - -o %f' -f $CUE -t "%n - %p - %a - $YEAR - %t" $WAV
rm -f $WAV
cd ..
mv $TMP_DIR "$YEAR-$ALBUM"
echo '[DONE]'
{% endhighlight %}

script using:

{% highlight bash %}
./isowv2ogg file.iso.wv
{% endhighlight %}
