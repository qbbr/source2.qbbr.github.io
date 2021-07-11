---
tags: [linux, php, symfony2, less]
author: @qbbr
---

### install (node.js + npm required):

```bash
sudo npm install -g less
```

### configure:

add less filter to assetic configuration:

```yaml
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
```

### using:

twig:

```twig
{% verbatim %}{% raw %}
{% stylesheets filter='less'
    '@QcmsAdminBundle/Resources/public/less/layout.less'
    '@QcmsAdminBundle/Resources/public/less/left-menu.less'
%}
    <link rel="stylesheet" href="{{ asset_url }}">
{% endstylesheets %}
{% endraw %}{% endverbatim %}
```
