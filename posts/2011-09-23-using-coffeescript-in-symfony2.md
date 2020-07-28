---
tags: [linux, php, symfony2, coffeescript]
---

### install (node.js + npm required):

```bash
sudo npm install -g coffee-script
```

### configure:

add coffee filter to assetic configuration:

```yaml
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
```

### using:

twig:

```twig
{% verbatim %}{% raw %}
{% javascripts filter='coffee'
    '@QcmsAdminBundle/Resources/public/coffee/menu.coffee'
    '@QcmsAdminBundle/Resources/public/coffee/ui-tabs.coffee'
%}
    <script src="{{ asset_url }}"></script>
{% endjavascripts %}
{% endraw %}{% endverbatim %}
```
