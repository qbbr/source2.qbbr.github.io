---
tags: [linux, debian, exim, mail, dns, dkim, spf]
author: @qbbr
---

### SPF (Sender Policy Framework)

**links:**
[wiki](https://en.wikipedia.org/wiki/Sender_Policy_Framework)
[syntax](http://www.openspf.org/SPF_Record_Syntax)
[tools](http://www.openspf.org/Tools)
[validator](http://www.kitterman.com/spf/validate.html)
[RFC 4408](http://www.ietf.org/rfc/rfc4408.txt)

#### DNS records

```bash
domain.tld IN TXT v=spf1 ip4:ipAddress ~all
# domain.tld IN SPF v=spf1 ip4:ipAddress ~all
```

where:  
ip4:**ipAddress** - Allowed IP for send

### DKIM (DomainKeys Identified Mail)

**links:**
[wiki](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail)
[validator](http://dkimcore.org/tools/keycheck.html)
[RFC 4871](http://www.ietf.org/rfc/rfc4871.txt)

#### generate DKIM keys

```bash
mkdir /etc/exim4/dkim
cd /etc/exim4/dkim
# private key
openssl genrsa -out domain.tld.key 1024
# public key
openssl rsa -in domain.tld.key -pubout > domain.tld.pub
# permissions
chown -R Debian-exim:Debian-exim /etc/exim4/dkim/
chmod 640 /etc/exim4/dkim/*
```

#### configure exim

configure exim for internet site

```bash
dpkg-reconfigure exim4-config
```

edit config: `/etc/exim4/update-exim4.conf.conf`  
or (if u use splitted config) `/etc/exim4/conf.d/transport/30_exim4-config_remote_smtp`

add this line:

```bash
DKIM_DOMAIN = ${lc:${domain:$h_from:}}
DKIM_KEY_FILE = /etc/exim4/dkim/domain.tld.key
DKIM_PRIVATE_KEY = ${if exists{DKIM_KEY_FILE}{DKIM_KEY_FILE}{0}}
DKIM_SELECTOR = mail
```

restart exim

```bash
/etc/init.d/exim4 restart
```

#### DNS records

```
mail._domainkey IN TXT v=DKIM1; k=rsa; p=publicKey
```

where:  
p=**publicKey** - u public key without new line breaks and comments (`/etc/exim4/dkim/domain.tld.pub`)  
**mail**._domainkey - `DKIM_SELECTOR` from exim config
