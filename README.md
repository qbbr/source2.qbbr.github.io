# qbbr.io blog source

a simple static site/blog generator written on [bash](build)

[qbbr.io](https://qbbr.io/)

## overview

 * posts/ - for blog posts in markdown style (format: year-month-day-post_name.md)
 * static/ - for auto copy contents to output dir (css, img, favicon)
 * views/ - for templates/layouts (html)
 * output/ - output dir with compiled site

## build

```bash
./build
```

## depends

 * [pandoc](https://command-not-found.com/pandoc) - convert markdown to html \w code highlight
 * [envsubst](https://command-not-found.com/envsubst) - simple template helper (gettext package)


## local web server

```bash
cd output/

# start web server
busybox httpd -f -p 8666
# or use one of way:
#php -S 127.0.0.1:8666
#python -m http.server 8666
#python2 -m SimpleHTTPServer 8666
#ruby -r webrick -e 'WEBrick::HTTPServer.new(:Port => 8666, :DocumentRoot => Dir.pwd).start'
#ruby -run -e httpd . -p 8666

# open in browser
x-www-browser http://127.0.0.1:8666/
```
