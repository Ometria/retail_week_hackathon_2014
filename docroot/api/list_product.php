<?php

require('_init.php');

$pid = $_GET['pid'];
$retailer = $_GET['retailer'];
$list_id = @$_GET['list'];

$product_title = @$_GET['p_title'];
$product_url = @$_GET['p_url'];
$product_price = @$_GET['p_price'];
$product_image_url = @$_GET['p_image'];

$product = product_get($retailer, $pid);

if (!$product && $product_url && $product_title && $product_image_url && $pid && $product_price){
    $product = product_create($retailer, $pid, array(
        'title'=>$product_title,
        'url'=>$product_url,
        'price'=>$product_price,
        'currency'=>'GBP',
        'image_url'=>$product_image_url,
        ));
}

if ($product) {
    product_add_to_list($retailer, $pid, $list_id);

    $ret = array('ok'=>true,'product'=>$product);
    send_json($ret);
} else {
    $ret = array('ok'=>false);
    send_json($ret, 500);
}

