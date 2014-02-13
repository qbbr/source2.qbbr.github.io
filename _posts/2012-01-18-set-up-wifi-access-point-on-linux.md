---
layout: post
title:  "set up wifi access point on linux"
date:   2012-01-18 22:25:00
categories: blog
tags: [linux, debian, network, wireless, iptables]
---

### 1) configure wireless adapter

add to `/etc/network/interfaces`:

{% highlight bash %}
auto wlan0
iface wlan0 inet static
    address 192.168.13.1
    network 192.168.13.0
    netmask 255.255.255.0
    broadcast 192.168.13.255
{% endhighlight %}

### 2) ap daemon

install [hostapd](http://hostap.epitest.fi/hostapd/):

{% highlight bash %}
$ sudo aptitude install hostapd
{% endhighlight %}

edit `/etc/hostapd/hostapd.conf`:

{% highlight bash %}
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
{% endhighlight %}

edit `/etc/default/hostapd`:

{% highlight bash %}
DAEMON_CONF="/etc/hostapd/hostapd.conf"
{% endhighlight %}

start daemon:

{% highlight bash %}
$ sudo /etc/init.d/hostapd start
{% endhighlight %}

### 3) netfilter

{% highlight bash %}
$ su
$ echo 1 > /proc/sys/net/ipv4/ip_forward
$ iptables -t nat -A POSTROUTING --out-interface eth0 -j MASQUERADE
$ exit
{% endhighlight %}

for every boot system, edit `/etc/network/if-pre-up.d/wifi`:

{% highlight bash %}
#!/bin/sh
/bin/echo 1 > /proc/sys/net/ipv4/ip_forward
/sbin/iptables -t nat -A POSTROUTING --out-interface eth0 -j MASQUERADE
{% endhighlight %}

grant execute permissions:

{% highlight bash %}
$ sudo chmod +x /etc/network/if-pre-up.d/wifi
{% endhighlight %}

if use **ppp0**:

{% highlight bash %}
sudo iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o ppp0 -j MASQUERADE
{% endhighlight %}

add line to `/etc/network/if-pre-up.d/wifi`:

{% highlight bash %}
/sbin/iptables -t nat -A POSTROUTING -s 192.168.13.0/24 -o ppp0 -j MASQUERADE
{% endhighlight %}

### 4) DNS & DHCP

install:

{% highlight bash %}
$ sudo aptitude install dnsmasq
{% endhighlight %}

edit `/etc/dnsmasq.conf`:

{% highlight bash %}
interface=wlan0
dhcp-range=192.168.13.10,192.168.13.50,24h
{% endhighlight %}

restart deamon:

{% highlight bash %}
$ sudo /etc/init.d/dnsmasq restart
{% endhighlight %}

### 5) enjoy!
