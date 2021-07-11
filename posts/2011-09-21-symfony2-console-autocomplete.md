---
tags: [linux, php, symfony2]
author: qbbr
---

### install:

```bash
sudo aptitude install bash-completion
```

```bash
wget https://raw.github.com/qbbr/symfony2-autocomplete/master/symfony2-autocomplete.bash
sudo mv symfony2-autocomplete.bash /etc/bash_completion.d/
```

add the following line to your ~/.bashrc:

```bash
if [ -e ~/symfony2-autocomplete.bash ]; then
. ~/symfony2-autocomplete.bash
fi
```

### see:

 * [youtube video](http://youtu.be/kL8A8VwBEog)
 * [github repo](https://github.com/qbbr/symfony2-autocomplete)
