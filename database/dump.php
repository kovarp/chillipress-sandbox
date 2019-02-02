<?php

require __DIR__ . '/../vendor/autoload.php';

use Nette\Neon\Neon;

$config = Neon::decode(file_get_contents(__DIR__ . '/../app/config/config.local.neon'));

$db = new mysqli(
	(isset($_SERVER['HTTP_HOST']))? $config['database']['host'] : 'localhost:8306',
	$config['database']['user'],
	$config['database']['password'],
	$config['database']['dbname']
);

$dump = new MySQLDump($db);
$dump->save(__DIR__ . '/create.sql');