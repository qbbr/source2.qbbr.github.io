---
tags: [linux, nginx]
---

### configure

**module [ngx_http_geo_module](http://nginx.org/ru/docs/http/ngx_http_geo_module.html) can be installed!!!**

```nginx
geo $maintenance {
	default yes;
	# ip white list
	127.0.0.1 no;
	192.168.100.0/24 no;
}

server {
	# ...

	location / {
		if (-f /etc/nginx/maintenance.file) {
			set $tmp clo;
		}
		if ($maintenance = yes) {
			set $action "${tmp}se";
		}
		if ($action = close) {
			return 503;
		}

		# ...
	}

	error_page 503 /503.html;
}
```

### use

`touch /etc/nginx/maintenance.file` - close site  
`rm /etc/nginx/maintenance.file` - open site
