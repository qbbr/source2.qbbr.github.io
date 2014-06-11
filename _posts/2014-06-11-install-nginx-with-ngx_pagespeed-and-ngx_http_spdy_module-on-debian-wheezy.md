---
layout: post
title:  "install nginx with ngx_pagespeed and ngx_http_spdy_module on debian wheezy"
date:   2014-06-11 11:21:00
categories: blog
tags: [linux, debian, nginx, spdy, pagespeed]
---

### install dependencies

{% highlight bash %}
$ aptitude install build-essential zlib1g-dev libpcre3 libpcre3-dev openssl libssl-dev checkinstall
{% endhighlight %}

### download nginx and ngx_pagespeed sources

{% highlight bash %}
$ export nginx_build_dir=$HOME/src
$ mkdir -p $nginx_build_dir && cd $_
# dl ngx_pagespeed
$ wget https://github.com/pagespeed/ngx_pagespeed/archive/v1.8.31.3-beta.zip -O ngx_pagespeed.zip && unzip ngx_pagespeed.zip && rm -f ngx_pagespeed.zip
# dl psol
$ cd ngx_pagespeed-*/ && wget https://dl.google.com/dl/page-speed/psol/1.8.31.3.tar.gz -O psol.tar.gz && tar -xzvf psol.tar.gz && rm -f psol.tar.gz
# dl nginx (http://nginx.org/en/download.html)
$ cd $nginx_build_dir && wget http://nginx.org/download/nginx-1.6.0.tar.gz -O nginx.tar.gz && tar -xvzf nginx.tar.gz && rm -f nginx.tar.gz
{% endhighlight %}

### change server name if n

`src/http/ngx_http_header_filter_module.c`:

{% highlight diff %}
--- src/http/ngx_http_header_filter_module.c.orig       2014-06-11 13:29:45.940360480 +0900
+++ src/http/ngx_http_header_filter_module.c    2014-06-11 13:31:01.572361703 +0900
@@ -49,2 +49,2 @@
-static char ngx_http_server_string[] = "Server: nginx" CRLF;
-static char ngx_http_server_full_string[] = "Server: " NGINX_VER CRLF;
+static char ngx_http_server_string[] = "Server: custom name" CRLF;
+static char ngx_http_server_full_string[] = "Server: custom name/1.1500.0" CRLF;
{% endhighlight %}

### build

{% highlight bash %}
$ cd $nginx_build_dir/nginx-*
$ ./configure \
	--prefix=/etc/nginx \
	--conf-path=/etc/nginx/nginx.conf \
	--sbin-path=/usr/sbin/nginx \
	--pid-path=/var/run/nginx.pid \
	--lock-path=/var/lock/nginx.lock \
	--http-log-path=/var/log/nginx/access.log \
	--error-log-path=/var/log/nginx/error.log \
	--http-client-body-temp-path=/var/lib/nginx/body \
	--http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
	--http-scgi-temp-path=/var/lib/nginx/scgi \
	--http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
	--http-proxy-temp-path=/var/lib/nginx/proxy \
	--with-http_ssl_module \
	--with-http_spdy_module \
	--with-http_realip_module \
	--with-http_gzip_static_module \
	--with-http_gunzip_module \
	--with-http_stub_status_module \
	--with-http_sub_module \
	--with-http_secure_link_module \
	--with-http_addition_module \
	--with-http_random_index_module \
	--add-module=$nginx_build_dir/ngx_pagespeed-*/
$ make
$ checkinstall
$ nginx –V
{% endhighlight %}

### install init script

{% highlight bash %}
$ cd $nginx_build_dir
$ wget http://http.us.debian.org/debian/pool/main/n/nginx/nginx-common_1.6.0-1_all.deb -O nginx-common.deb && dpkg -x nginx-common.deb nginx-common && cp nginx-common/etc/init.d/nginx . && rm -rf nginx-common nginx-common.deb
$ cp nginx /etc/init.d/nginx
{% endhighlight %}

### use

{% highlight bash %}
$ /etc/init.d/nginx start
{% endhighlight %}
