---
tags: [linux, git]
author: @qbbr
---

### configure

`~/.gitconfig`:

```ini
[user]
	name = my name
	email = mymail@domain.com
[color]
	diff = auto
	status = auto
	branch = auto
[alias]
	co = checkout
	ci = commit
	st = status
	br = branch
	hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
	type = cat-file -t
	dump = cat-file -p
[core]
	filemode = true
```

### tags

```bash
# create
git tag <tag_name>
git tag <tag_name> <commit>
# list
git tag
# jump to
git tag <tag_name>
# remove
git tag -d <tag_name>
# remove from remove (after local changes)
git push origin :refs/tags/<tag_name>
# push to remote
git push origin --tags
```

### patches

```bash
# create
git diff > 01.patch
git diff HEAD^ > 01.patch
git diff <commit> > 01.patch
# apply
git apply --stat 01.patch
git apply --check  01.patch
git apply -v 01.patch
```
