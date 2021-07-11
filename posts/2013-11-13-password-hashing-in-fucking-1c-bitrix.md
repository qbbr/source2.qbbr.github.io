---
tags: [php, 1c-bitrix, md5]
author: @qbbr
---

### T_T

```python
# plain text password from html form
raw_password = "123qweasd"

# hash in db
bitrix_hash = "YRvaAG943c67fe179077109cb0587c2c93a167c6"

salt = bitrix_hash[:8]          # YRvaAG943
password_hash = bitrix_hash[8:] # c67fe179077109cb0587c2c93a167c6

if md5(salt + raw_password) == password_hash:
    print(True)
```
