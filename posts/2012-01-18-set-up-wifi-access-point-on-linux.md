---
tags: [linux, debian, network, wireless, iptables]
author: qbbr
---

### 1) configure wireless adapter

add to `/etc/network/interfaces`:

```bash
auto wlan0
iface wlan0 inet static
    address 192.168.13.1
    network 192.168.13.0
    netmask 255.255.255.0
    broadcast 192.168.13.255
```

### 2) ap daemon

install [hostapd](http://hostap.epitest.fi/hostapd/):

```bash
sudo aptitude install hostapd
```

edit `/etc/hostapd/hostapd.conf`:

```bash
interface=wlan0
driver=nl80211

# AP name
ssid=MY_AP
country_code=RU
hw_mode=g
channel=1

macaddr_acl=0

wpa=3
wpa_key_mgmt=WPA-PSK
# password
wpa_passphrase=password
wpa_pairwise=TKIP CCMP
```

edit `/etc/default/hostapd`:

```bash
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

start daemon:

```bash
sudo /etc/init.d/hostapd start
```

### 3) netfilter

```bash
su
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -A POSTROUTING --out-interface eth0 -j MASQUERADE
exit
```

for every boot system, edit `/etc/network/if-pre-up.d/wifi`:

```bash
#!/bin/sh
/bin/echo 1 > /proc/sys/net/ipv4/ip_forward
/sbin/iptables -t nat -A POSTROUTING --out-interface eth0 -j MASQUERADE
```

grant execute permissions:

```bash
sudo chmod +x /etc/network/if-pre-up.d/wifi
```

if use **ppp0**:

```bash
sudo iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o ppp0 -j MASQUERADE
```

add line to `/etc/network/if-pre-up.d/wifi`:

```bash
/sbin/iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o ppp0 -j MASQUERADE
```

### 4) DNS & DHCP

install:

```bash
sudo aptitude install dnsmasq
```

edit `/etc/dnsmasq.conf`:

```bash
interface=wlan0
dhcp-range=192.168.13.10,192.168.13.50,24h
```

restart deamon:

```bash
sudo /etc/init.d/dnsmasq restart
```

### 5) enjoy!
