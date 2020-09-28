---
tags: [linux, awk]
---

[![qbbr-colorful-ls-with-awk](/img/blog/qbbr-colorful-ls-with-awk.png)](/img/blog/qbbr-colorful-ls-with-awk.png){.img}<!-- nofig -->

```bash
ls -lA --color=always | \
	awk \
		-v black=$(tput setaf 0) \
		-v red=$(tput setaf 1) \
		-v green=$(tput setaf 2) \
		-v yellow=$(tput setaf 3) \
		-v blue=$(tput setaf 4) \
		-v magenta=$(tput setaf 5) \
		-v cyan=$(tput setaf 6) \
		-v white=$(tput setaf 7) \
		-v reset=$(tput sgr0) \
	'
	# for trim first space
	function ltrim(s) {
		sub(/^ /, "", s);
		return s;
	}
	BEGIN {
		# for normal spaces output (size field)
		FPAT = "([[:space:]]*[^[:space:]]+)";
		OFS = "";
	}
	{
		if (NR > 1) { # skip 1st line \w total
			# permissions
			$1 = magenta$1reset;
			# link count
			$2 = blue$2reset;
			# owner (wrap "[]")
			$3 = ltrim($3);
			$3 = " ["yellow$3reset; # user
			$4 = yellow$4reset"]";  # group
			# size
			$5 = green$5reset;
			# datetime (wrap "()")
			$6 = ltrim($6);
			$6 = " ("cyan$6reset; # month
			$7 = cyan$7reset;     # day
			$8 = cyan$8reset")";  # time
			print
		}
	}
	'
```

```bash
# .bashrc
ls() {
	ls -lA --color=always $* | awk 'put awk code here'
}
```
