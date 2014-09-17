<?php

require('_init.php');

$pid = $_REQUEST['pid'];
$retailer = $_REQUEST['retailer'];

$product_title = @$_REQUEST['p_title'];
$product_url = @$_REQUEST['p_url'];
$product_price = @$_REQUEST['p_price'];
$product_image_url = @$_REQUEST['p_image'];


$product = product_create($retailer, $pid, array(
    'title'=>$product_title,
    'url'=>$product_url,
    'price'=>$product_price,
    'currency'=>'GBP',
    'image_url'=>$product_image_url,
    ));

$ret = array('ok'=>true,'product'=>$product);
send_json($ret);
