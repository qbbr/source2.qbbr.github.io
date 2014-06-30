---
layout: post
title:  "custom maintenance page on nginx"
date:   2014-06-30 15:46:00
categories: blog
tags: [linux, nginx]
---

### configure

**module [ngx_http_geo_module](http://nginx.org/ru/docs/http/ngx_http_geo_module.html) can be installed!!!**

{% highlight nginx %}
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
{% endhighlight %}

### use

`touch /etc/nginx/maintenance.file` - close site  
`rm /etc/nginx/maintenance.file` - open site
