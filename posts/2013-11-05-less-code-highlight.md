---
tags: [linux, less]
author: qbbr
---

### install

```bash
sudo aptitude install source-highlight
```

### configure

add to .bashrc:

```bash
export LESSOPEN='| /usr/share/source-highlight/src-hilite-lesspipe.sh %s'
export LESS=' -R '
```
