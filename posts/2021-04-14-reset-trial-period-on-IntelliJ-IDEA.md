---
tags: [linux, IntelliJ, hack]
author: qbbr
---

```bash
find ~/.config/JetBrains/IntelliJIdea*/eval -name '*.key' -exec rm {} \;
find ~/.config/JetBrains/IntelliJIdea* -exec touch -t $(date +"%Y%m%d%H%M") {} \;
find ~/.config/JetBrains/IntelliJIdea*/options -name 'other.xml' -exec sed -i '/evlsprt/d' {} \;
find ~/.java/* -type d -exec touch -t $(date +"%Y%m%d%H%M") {} \;
rm -rf ~/.java/.userPrefs/jetbrains/idea/
```
