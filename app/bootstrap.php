<?php declare(strict_types=1);

$rootPath = dirname(__DIR__);
$webrootPath = $rootPath . '/www';

require __DIR__ . '/../vendor/autoload.php';

$configurator = new kovarp\ChilliPress\Core\Configurator();

/**
 * Load configuration files
 */
$configurator->addConfig(__DIR__ . '/config/config.neon');
$configurator->addConfig(__DIR__ . '/config/config.local.neon');

require __DIR__ . '/../www/content/mu-plugins/chillipress/src/Core/config.php';

$container = $configurator->createContainer();

return $container;