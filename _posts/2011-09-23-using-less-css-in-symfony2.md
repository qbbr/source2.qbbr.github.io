---
layout: post
title:  "using LESS CSS in symfony2"
date:   2011-09-23 05:11:00
categories: blog
tags: [linux, php, symfony2, less]
---

### install (node.js + npm required):

{% highlight bash %}
$ sudo npm install -g less
{% endhighlight %}

### configure:

add less filter to assetic configuration:

{% highlight yaml linenos=table %}
# app/config/config.yml
# ...
# Assetic Configuration
assetic:
    debug:          %kernel.debug%
    use_controller: false
    filters:
        cssrewrite: ~
        less:
            node: /usr/bin/node
            node_paths: [/usr/lib/node_modules/]
{% endhighlight %}

### using:

twig:

{% highlight jinja linenos=table %}
{% raw %}
{% stylesheets filter='less'
    '@QcmsAdminBundle/Resources/public/less/layout.less'
    '@QcmsAdminBundle/Resources/public/less/left-menu.less'
%}
    <link rel="stylesheet" href="{{{{ asset_url }}}}">
{% endstylesheets %}
{% endraw %}
{% endhighlight %}
