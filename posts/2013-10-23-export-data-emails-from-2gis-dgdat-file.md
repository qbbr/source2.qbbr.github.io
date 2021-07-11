---
tags: [2gis, dgdat, xor, hacking]
author: @qbbr
---

### download latest 2gis db for ur city

 * from web [site](http://2gis.ru/how-get/linux/)
 * or use u local db (path/to/2gis/3.0/Data_Novosibirsk.dgdat)

### for decrypt the file, use bitwise Exclusive OR operation (xor)

```cpp
[file] ^ 0xC5 // pattern 11000101
```

 1. open u .dgdat file in hexeditor
 2. xor file by pattern 11000101
 3. save as (file.dump)

### after decrypt use a regular expression to get mail addresses

```bash
grep -E -o -a "[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.(ru|ua|aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)" file.dump > emails.txt
```

### enjoy

```bash
wc -l emails.txt
34864 emails.txt # (>^_^)> Prank Gone Right
```

### hex editors for linux

 * [wxHexEditor](http://www.wxhexeditor.org/)
 * [Bless](http://home.gna.org/bless/)
