---
layout: post
title:  "using CoffeeScript in symfony2"
date:   2011-09-23 05:29:00
categories: blog
tags: [linux, php, symfony2, coffeescript]
---

### install (node.js + npm required):

{% highlight bash %}
$ sudo npm install -g coffee-script
{% endhighlight %}

### configure:

add coffee filter to assetic configuration:

{% highlight yaml linenos=table %}
# app/config/config.yml
# ...
# Assetic Configuration
assetic:
    debug:          %kernel.debug%
    use_controller: false
    filters:
        cssrewrite: ~
        coffee:
            node: /usr/bin/node
            bin: /usr/bin/coffee
{% endhighlight %}

### using:

twig:

{% highlight jinja linenos=table %}
{% raw %}
{% javascripts filter='coffee'
    '@QcmsAdminBundle/Resources/public/coffee/menu.coffee'
    '@QcmsAdminBundle/Resources/public/coffee/ui-tabs.coffee'
%}
    <script src="{{ asset_url }}"></script>
{% endjavascripts %}
{% endraw %}
{% endhighlight %}
