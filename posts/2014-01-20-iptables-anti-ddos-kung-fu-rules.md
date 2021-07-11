---
tags: [linux, iptables, ddos, sysctl]
author: @qbbr
---

### ICMP flood protection

Дропаем нахрен весь ICMP echo:

```bash
-A INPUT -p icmp -j DROP --icmp-type 8
```

### SYN flood atack

SYN-флуд — одна из разновидностей сетевых атак типа отказ от обслуживания, которая заключается в отправке большого количества SYN-запросов (запросов на подключение по протоколу TCP) в достаточно короткий срок.  

Рабочий пример атаки:

```bash
sudo hping3 -i u1 -S -p 80 <IP>
```

### SYN flood protection

Ограничиваем плохих парней, пусть нервно курят.

```bash
# новая ветка syn_flood
-N syn_flood
# блокируем на 60 сек плохих парней
-A INPUT -m recent --update --seconds 60 --name bad_guys --rsource -j DROP
# tcp трафик через интерфейс eth0 отправляем на проверку SYN флуда (syn_flood)
-A INPUT -i eth0 -p tcp -m tcp --tcp-flags FIN,SYN,RST,ACK SYN -j syn_flood
# максимум 30 соединений в секунду, но не более 300 раз подряд
-A syn_flood -m limit --limit 30/sec --limit-burst 300 -j RETURN
# логируем флуд
-A syn_flood -j LOG --log-prefix "SYN flood: "
# остальное дропаем
-A syn_flood -m recent --set --name bad_guys --rsource -j DROP
```

### UDP flood protection

Ограничиваем исходящий UDP трафик.

```bash
# новая ветка udp_flood
-N udp_flood
# весь исходящий UDP трафик пропускаем через udp_flood ветку
-A OUTPUT -p udp -j udp_flood
# максимум 20 соединений в секунду, но не более 150
-A udp_flood -p udp -m limit --limit 20/s --limit-burst 150 -j RETURN
# логируем флуд
-A udp_flood -j LOG --log-level 4 --log-prefix "UDP flood: "
# остальное дропаем
-A udp_flood -j DROP
```

### MAX connections limits

Ограничеваем максимальное количество одновременных соеденений с одного ip:

```bash
# по HTTP (33)
-A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 33 -j REJECT
# по HTTPS (33)
-A INPUT -p tcp --dport 443 -m connlimit --connlimit-above 33 -j REJECT
# по FTP (10)
-A INPUT -p tcp --dport 21 -m connlimit --connlimit-above 10 -j REJECT
# по SSH (5)
-A INPUT -p tcp --dport 22 -m connlimit --connlimit-above 5 -j REJECT
```

### Other protections

Ну и разумеется поправим конфигурацию само ядрышка.  
/etc/sysctl.conf:

```bash
# Защита от SYN атак, включаем SYN cookies
net.ipv4.tcp_syncookies=1
# Увеличим размер пула "полуоткрытых" соединений,
# полезно при SYN флуде [default: 512]
net.ipv4.tcp_max_syn_backlog=2048
# Целочисленное значение (1 байт) tcp_synack_retries
# определяет число попыток повтора передачи пакетов SYNACK
# для пассивных соединений TCP. Число попыток не должно превышать 255.
# Используемое по умолчанию значение 5 соответствует приблизительно
# 180 секундам на выполнение попыток организации соединения.
# Уменьшим до 1 (примерно 9 сек).
net.ipv4.tcp_synack_retries=1
# Изменяем время ожидания приема FIN до полного закрытия сокета
net.ipv4.tcp_fin_timeout=10
# Проверять TCP-соединение каждую минуту.
# Если на другой стороне - легальная машина,
# она сразу ответит [default: 2h]
net.ipv4.tcp_keepalive_time=60
# Повторить пробу через 10 секунд
net.ipv4.tcp_keepalive_intvl=10
# Количество проверок перед закрытием соединения
net.ipv4.tcp_keepalive_probes=5
# Фильтр обратного пути, защита от спуфинга (подмены адресов)
net.ipv4.conf.default.rp_filter=1
```

### Console commands
```bash
netstat -n --tcp | grep SYN_RECV | wc -l
netstat -plan | grep :80 | awk '{print $5}' | awk -F: '{print $1}' | sort | uniq -c
netstat -ntu | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -n
watch -n1 -d -t 'netstat -plan | grep :80 | awk "{print \$5}" | awk -F: "{print \$1}" | sort | uniq -c | sort -rg'
```

### Enjoy!
