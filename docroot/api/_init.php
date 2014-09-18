<?php

$origin = '*';
if (@$_SERVER['HTTP_REFERER']) {
    $parts = explode("/", $_SERVER['HTTP_REFERER']);
    $origin = $parts[0].'//'.$parts[2];
}

header('Access-Control-Allow-Origin: '.$origin);
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Credentials: true');

require(__DIR__.'/../../lib/id.php');
require(__DIR__.'/../../lib/misc.php');
require(__DIR__.'/../../lib/db.php');
require(__DIR__.'/../../lib/models.php');
