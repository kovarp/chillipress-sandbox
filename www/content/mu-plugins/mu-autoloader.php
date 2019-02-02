<?php

/**
 * Manual loader
 */
$plugins = array(
	'/wp-tracy/index.php',
	'/wordpress-seo/wp-seo.php',
	'/wp-smushit/wp-smush.php',
	'/wp-super-cache/wp-cache.php'
);

if (file_exists(__DIR__ . '/advanced-custom-fields-pro/acf.php')) {
	$plugins[] = '/advanced-custom-fields-pro/acf.php';
} else {
	$plugins[] = '/advanced-custom-fields/acf.php';
}

foreach ($plugins as $plugin) {
	if (file_exists(__DIR__ . $plugin)) {
		require __DIR__ . $plugin;
	}
}

/**
 * MU plugins autoloader
 */
$dirs = glob(dirname(__FILE__) . '/*' , GLOB_ONLYDIR);

foreach($dirs as $dir) {
	if(file_exists($dir . DIRECTORY_SEPARATOR . basename($dir) . ".php")) {
		require($dir . DIRECTORY_SEPARATOR . basename($dir) . ".php");
	}
}