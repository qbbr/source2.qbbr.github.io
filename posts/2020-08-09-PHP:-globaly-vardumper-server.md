---
tags: [symfony, php]
author: @qbbr
---

### installation && configure

[Symfony VarDumper Component](https://symfony.com/doc/current/components/var_dumper.html)

```bash
composer global require symfony/var-dumper symfony/console
```

add to `.bashrc`:

```bash
export PATH="$PATH:$HOME/.config/composer/vendor/bin"
```

file `~/.config/php/autoload.php`:

```php
<?php

require getenv('HOME').'/.config/composer/vendor/autoload.php';
require __DIR__.'/var_dumper_server.php';
```

file `~/.config/php/var_dumper_server.php`:

```php
<?php

use Symfony\Component\VarDumper\Cloner\VarCloner;
use Symfony\Component\VarDumper\Dumper\CliDumper;
use Symfony\Component\VarDumper\Dumper\ContextProvider\CliContextProvider;
use Symfony\Component\VarDumper\Dumper\ContextProvider\SourceContextProvider;
use Symfony\Component\VarDumper\Dumper\HtmlDumper;
use Symfony\Component\VarDumper\Dumper\ServerDumper;
use Symfony\Component\VarDumper\VarDumper;

$cloner = new VarCloner();
$fallbackDumper = \in_array(\PHP_SAPI, ['cli', 'phpdbg']) ? new CliDumper() : new HtmlDumper();
$dumper = new ServerDumper($_SERVER['VAR_DUMPER_SERVER'] ?? 'tcp://127.0.0.1:9912', $fallbackDumper, [
    'cli' => new CliContextProvider(),
    'source' => new SourceContextProvider(),
]);

VarDumper::setHandler(function ($var) use ($cloner, $dumper) {
    $dumper->dump($cloner->cloneVar($var));
});;
```

set auto_prepend_file in `php.ini` file:

```
auto_prepend_file = ${HOME}/.config/php/autoload.php
```

(optional) u can set VAR_DUMPER_SERVER, `.bashrc`:

```bash
export VAR_DUMPER_SERVER=tcp://127.0.0.1:9913
```

### using

use `var-dump-server` cmd for start same server

```bash
# test.php
<?php

dump($_SERVER);

echo 'test';
```

```bash
php test.php
```

see pretty print dump on console =)
