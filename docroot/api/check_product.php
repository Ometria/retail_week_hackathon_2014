<?php

require('_init.php');

$pid = $_GET['pid'];
$retailer = $_GET['retailer'];

$is_listed = product_is_wishlisted($retailer, $pid);

$ret = array('listed'=>$is_listed);
send_json($ret);