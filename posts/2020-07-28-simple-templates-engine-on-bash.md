---
tags: [linux, bash]
---

great for generating cfg/rc from template

### template

test.tmpl:

```bash
test template.
${var1}, ${var2}
```

### render

```bash
export var1="hello"
export var2="world"
envsubst < file.tmpl
```

### output

```
test template.
hello, world!
```

### links

[envsubst](https://command-not-found.com/envsubst)
