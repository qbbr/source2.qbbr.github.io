---
tags: [rsyslog, mysql, linux]
author: qbbr
---

### server (10.10.1.1)

```bash
apt install rsyslog-mysql
```

/etc/rsyslog.d/mysql.conf:

```ini
# provides UDP syslog reception
module(load="imudp")
input(type="imudp" port="514")

# provides TCP syslog reception
module(load="imtcp")
input(type="imtcp" port="514")

# configuration for rsyslog-mysql
module(load="ommysql")
# collect all logs
*.* action(type="ommysql" server="127.0.0.1" db="Syslog" uid="rsyslog" pwd="MYSQL_PASSWORD")
# collect only only error,warn,crit,alert,emerg
#-*.=error;*.=warn;*.=crit;*.=alert;*.=emerg action(type="ommysql" server="127.0.0.1" db="Syslog" uid="rsyslog" pwd="MYSQL_PASSWORD")

```

iptables, if used:

```bash
-A INPUT -s 10.10.1.0/24 -p tcp --dport 514 -j ACCEPT
-A INPUT -s 10.10.1.0/24 -p udp --dport 514 -j ACCEPT
```

see logs:

```bash
mysql Syslog -u rsyslog -p
> select * from SystemEvents;
```


### client (10.10.1.2)

/etc/rsyslog.d/51-to-remote.conf:

```ini
# send all logs to remote
*.* @@10.10.1.1:514
```

```ini
# send only error,warn,crit,alert,emerg
*.=error;*.=warn;*.=crit;*.=alert;*.=emerg @@10.10.1.1:514
```

test:

```bash
logger -p user.crit "test critical message"
```

### links

 * [The rocket-fast Syslog Server](https://www.rsyslog.com/)
 * [GitHub](https://github.com/rsyslog/rsyslog)
