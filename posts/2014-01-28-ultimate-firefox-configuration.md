---
tags: [firefox, anonymous, security]
---

### plugins

 * [Adblock Plus](https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/)
 * [NoScript](http://noscript.net/)
 * [HTTPS-Everywhere](https://www.eff.org/https-everywhere)
 * [Ghostery](https://www.ghostery.com/)
 * [Flashblock](https://addons.mozilla.org/en-US/firefox/addon/flashblock/)
 * [Better Privacy](https://addons.mozilla.org/en-US/firefox/addon/betterprivacy/)

### about:config

```bash
# private mode by default
browser.privatebrowsing.autostart;true
# what? u crazy...
browser.send_pings;false
# blank page on start
browser.startup.page;0
# homepage is blank
browser.startup.homepage;about:blank
# no page on newtab
browser.newtabpage.enabled;false
# newtab page is blank
browser.newtab.url;about:blank
# no tab animation
browser.tabs.animate;false
# no fullscreen animation
browser.fullscreen.animateUp;0
# no animation in panorama mode
browser.panorama.animate_zoom;false
# don`t save thumbnails
browser.pagethumbnails.storage_version;0
# no thumbnails on drag tab
nglayout.enable_drag_images;false
# no smooth scroll
general.smoothScroll;false

# disable auto update
app.update.enabled;false
# disable search engine update
browser.search.update;false
# default search engine
browser.search.defaultenginename;DuckDuckGo
# override useragent
general.useragent.override;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36
# disable geo location
geo.enabled;false

# disable fucking zond
browser.safebrowsing.remoteLookups;false
# wow, wow... zond...
browser.safebrowsing.malware.enabled;false
# http://safebrowsing.clients.google.com/? O_o fuck u google!
# fucking_google -> localhost
browser.safebrowsing.malware.reportURL;http://localhost/fucking_google/
browser.safebrowsing.reportMalwareURL;http://localhost/fucking_google/
browser.safebrowsing.reportMalwareErrorURL;http://localhost/fucking_google/
browser.safebrowsing.keyURL;https://localhost//fucking_google/
browser.safebrowsing.gethashURL;http://localhost/fucking_google/
browser.safebrowsing.updateURL;http://localhost/fucking_google/
browser.safebrowsing.reportURL;http://localhost/fucking_google/
# reports to localhost
browser.safebrowsing.reportErrorURL;http://localhost/
browser.safebrowsing.reportGenericURL;http://localhost/
browser.safebrowsing.reportPhishURL;http://localhost/

# do not track me plz
privacy.donottrackheader.enabled;true
# cleanup pass on close
privacy.clearOnShutdown.passwords;true
# clear cookie on close
privacy.clearOnShutdown.cookies;true

# turn off js access to resize w
dom.disable_window_move_resize;true
# f u dom storage ([INFO]: n for feedly.com)
dom.storage.enabled;false

# no history
browser.sessionhistory.max_total_viewers;0
# max urls in address panel
browser.sessionhistory.max_entries;10
# no offline cache
browser.cache.offline.enable;false
browser.cache.offline.capacity;0
# no cache on disk (if RAM >= 4096Mb)
browser.cache.disk.enable;false
# cache to mem
browser.cache.memory.enable;true

# cookie only for current session
network.cookie.lifetimePolicy;2
# cookie lifetime
network.cookie.lifetime.days;0
# don`t save cookie on change ff version
network.cookie.prefsMigrated;false
# for more secure cookie
network.cookie.cookieBehavior;3
# 3rd party cookie only for current session
network.cookie.thirdparty.sessionOnly;true
# oh, fuck off websockets
network.websocket.enabled;false
# disable expose protocol handler
network.protocol-handler.expose.mailto;false
network.protocol-handler.expose.news;false
network.protocol-handler.expose.nntp;false
network.protocol-handler.expose.nntp;false
# disable external protocol handler
network.protocol-handler.external-default;false
network.protocol-handler.external.mailto;false
network.protocol-handler.external.news;false
network.protocol-handler.external.nntp;false
network.protocol-handler.external.snews;false
# warn me if external protocol has been used
network.protocol-handler.warn-external-default;true
network.protocol-handler.warn-external.file;true
network.protocol-handler.warn-external.mailto;true
network.protocol-handler.warn-external.news;true
network.protocol-handler.warn-external.nntp;true
network.protocol-handler.warn-external.snews;true
# don`t send referrer in header
network.http.sendRefererHeader;0
network.http.sendSecureXSiteReferrer;false
# if use proxy, dns must be wrapped
network.proxy.socks_remote_dns;true
# don`t use prefetch url (rel="prefetch")
network.prefetch-next;false
# enable pipelining (~+80% performans)
network.http.pipelining;true
network.http.pipelining.ssl;true
network.http.proxy.pipelining;true
network.http.pipelining.maxrequests;32

# disable IPv6
network.dns.disableIPv6;true

# no auto refresh page
accessibility.blockautorefresh;true

# don`t remember password for sites
signon.rememberSignons;false
# autofill
signon.autofillForms;false

# disable default inspector if using firebug
devtools.inspector.enabled;false
extensions.firebug.hideDefaultInspector;true

# disable missing plugin notification
plugins.hide_infobar_for_missing_plugin;true
# no scan plugins
plugin.scan.plid.all;false
# start plugin after click
plugins.click_to_play;true

# always show http(s):// in urlbar
browser.urlbar.trimURLs;false
```
