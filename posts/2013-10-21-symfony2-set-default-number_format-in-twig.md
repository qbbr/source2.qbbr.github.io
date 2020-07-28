---
tags: [php, symfony2, twig]
---

1) [create kernel event listener](2013-10-21-symfony2-create-kernel-event-listener)

2) modify onKernelRequest:

```php
<?php

namespace Acme\DemoBundle\EventListener;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class AcmeKernelListener
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        $this->container->get('twig')->getExtension('core')->setNumberFormat(2, '.', '');
    }
}
```

3) using [number_format](http://twig.sensiolabs.org/doc/filters/number_format.html) in twig
