<?php

define( 'WPCACHEHOME', '/var/www/html/www/content/mu-plugins/wp-super-cache/' );
$container = require __DIR__ . '/../app/bootstrap.php';

/** Sets up WordPress vars and included files */
require_once ABSPATH . 'wp-settings.php';
