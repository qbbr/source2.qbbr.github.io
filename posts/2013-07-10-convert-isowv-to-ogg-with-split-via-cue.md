---
tags: [linux, debian, multimedia, iso.wv, ogg, cue]
author: @qbbr
---

### install (debian):

```bash
sudo aptitude install shntool vorbis-tools wavpack
```

### using:

```bash
wvunpack -cc file.iso.wv
shnsplit -o 'cust ext=ogg oggenc -q9 - -o %f' -f file.cue -t %t file.wav
```

convert **.iso.wv** to **.ogg** with auto rename **.ogg** files:

```bash
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
```

script using:

```bash
./isowv2ogg file.iso.wv
```
