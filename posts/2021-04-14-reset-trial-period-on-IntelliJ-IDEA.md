---
tags: [linux, IntelliJ, hack]
---

```bash
find ~/.config/JetBrains/IntelliJIdea*/eval -name '*.key' -exec rm {} \;
find ~/.config/JetBrains/IntelliJIdea* -exec touch -t $(date +"%Y%m%d%H%M") {} \;
find ~/.java/* -type d -exec touch -t $(date +"%Y%m%d%H%M") {} \;
rm -rf ~/.java/.userPrefs/jetbrains/idea/
```
