<?php

require('_init.php');

$pid = $_GET['pid'];
$retailer = $_GET['retailer'];

if (!is_array($pid)) $pid = array($pid);

$ret = array();

foreach($pid as $p){
    $ret[$p] = product_is_wishlisted($retailer, $p);
}

header('Content-Type: text/javascript');
echo 'stash_status('.json_encode($ret).');';
