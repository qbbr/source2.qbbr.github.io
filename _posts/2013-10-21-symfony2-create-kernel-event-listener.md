---
layout: post
title:  "symfony2 create kernel event listener"
date:   2013-10-21 14:50:00
categories: blog
tags: [php, symfony2]
---


src/Acme/DemoBundle/EventListener/AcmeKernelListener.php:

{% highlight php linenos=table %}
<?php

namespace Acme\DemoBundle\EventListener;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;

class AcmeKernelListener
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        $container = $this->container;
        $kernel    = $event->getKernel();
        $request   = $event->getRequest();
        // u code
    }

    public function onKernelResponse(FilterResponseEvent $event)
    {
        $container = $this->container;
        $kernel    = $event->getKernel();
        $response  = $event->getResponse();
        $request   = $event->getRequest();
        // u code
    }
}
{% endhighlight %}

app/config/config.yml:

{% highlight yaml linenos=table %}
services:
    listener.requestresponse:
        class: Acme\DemoBundle\EventListener\AcmeKernelListener
        arguments: [ @service_container ]
        tags:
            - { name: kernel.event_listener, event: kernel.request, method: onKernelRequest }
            - { name: kernel.event_listener, event: kernel.response, method: onKernelResponse }
{% endhighlight %}
