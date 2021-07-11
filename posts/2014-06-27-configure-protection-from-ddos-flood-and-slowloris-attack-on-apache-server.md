---
tags: [linux, debian, apache, security, ddos]
author: qbbr
---

### mod_evasive

[mod_evasive](http://www.zdziarski.com/blog/?page_id=442) - anti DDOS, flood attack.

#### install

```bash
aptitude install libapache2-mod-evasive
```

#### configure

```bash
mkdir /var/log/mod_evasive/
chown www-data:www-data /var/log/mod_evasive/
```

`/etc/apache2/conf.d/modevasive`:

```apache2
<ifmodule mod_evasive20.c>
	DOSHashTableSize 3097
	DOSPageCount 2
	DOSSiteCount 50
	DOSPageInterval 1
	DOSSiteInterval 1
	DOSBlockingPeriod 60
	DOSLogDir /var/log/mod_evasive
	DOSEmailNotify webmaster@localhost
	DOSWhitelist 127.0.0.1
	DOSWhitelist 192.168.*.*
</ifmodule>
```

### mod_security

[mod_security](https://modsecurity.org/) - open source web application firewall.

#### install

```bash
aptitude install libapache-mod-security
```

#### install rules

```bash
cd /tmp/
wget https://github.com/SpiderLabs/owasp-modsecurity-crs/archive/v2.2.5.tar.gz
tar xvf v2.2.5.tar.gz
mkdir /etc/apache2/mod_security_rules/
mv owasp-modsecurity-crs-2.2.5/base_rules/* /etc/apache2/mod_security_rules/
rm -rf owasp-modsecurity-crs-2.2.5/ v2.2.5.tar.gz
chown -R root:root /etc/apache2/mod_security_rules/
```

#### configure

```bash
cp /etc/modsecurity/modsecurity.conf-recommended /etc/modsecurity/modsecurity.conf
```

enable engine `/etc/modsecurity/modsecurity.conf`:

```apache2
SecRuleEngine On
```

`/etc/apache2/conf.d/modsecurity`:

```apache2
<ifmodule mod_security2.c>
	Include mod_security_rules/*.conf
	SecWriteStateLimit 100
</ifmodule>
```

### enable apache modules

```bash
a2enmod headers unique_id mod-evasive mod-security
/etc/init.d/apache2 restart
```

### testing

[slowhttptest](http://code.google.com/p/slowhttptest/)

```bash
slowhttptest -c 65539 -B -g -o my_server_stats -i 110 -r 200 -s 8192 -t FAKEVERB -u www.my-site.local -x 10 -p 3

Fri Jun 27 09:42:19 2014:
slow HTTP test status on 10th second:

initializing:        0
pending:             1406
connected:           50
error:               0
closed:              15
service available:   NO
```
