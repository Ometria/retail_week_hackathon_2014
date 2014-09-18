<?php

require('../_init.php');

$pid = $_REQUEST['pid'];
$retailer = $_REQUEST['retailer'];


$list_id = @$_REQUEST['list'];
if (!$list_id) $list_id='def_'.current_user();

$product_title = @$_REQUEST['p_title'];
$product_url = @$_REQUEST['p_url'];
$product_price = @$_REQUEST['p_price'];
$product_image_url = @$_REQUEST['p_image'];


$product = product_get($retailer, $pid);

if (!$product && $product_url && $product_title && $product_image_url && $pid && $product_price){

    $product_price = preg_replace('#[^0-9\.]+#m','',$product_price)*1;

    $product = product_create($retailer, $pid, array(
        'title'=>$product_title,
        'url'=>$product_url,
        'price'=>$product_price,
        'currency'=>'GBP',
        'image_url'=>$product_image_url,
        ));
}

if (!$product){
    $product = array();
    $product['title'] = 'Asus C300 Chromebook, Intel Celeron, 2GB RAM, 32GB SSD, 13.3", Red';
    $product['image_url'] = 'http://johnlewis.scene7.com/is/image/JohnLewis/233845648alt3?$prod_main$';
    $product['price'] = 239.9;
    $product['url'] = 'http://www.johnlewis.com/asus-c300-chromebook-intel-celeron-2gb-ram-32gb-ssd-13-3-red/p1625271';
}

$logo = 'http://www.johnlewis.com/assets/header/john-lewis-logo.gif';
$product['logo'] = image_thumbnail_url($logo, '200x20', 'resize');

$product_image = image_thumbnail_url(@$product['image_url'], '320x300', 'resizenp');
$price_formatted = '£'.sprintf('%01.2f',$product['price']);

$lists = lists_get_for_user(false);




if ($product) {

    $list_ids = product_get_list_ids($retailer, $pid);

    if ($list_id) {
        if (array_contains($list_ids, $list_id)){
            if (isset($_GET['list'])) product_remove_from_list($retailer, $pid, $list_id);
        } else {
            product_add_to_list($retailer, $pid, $list_id);
        }
        $list_ids = product_get_list_ids($retailer, $pid);
    }

    $data = array(
        'product'=>$product,
        'product_image'=>$product_image,
        'price_formatted'=>$price_formatted,
        'lists'=>$lists,
        'pid'=>$pid,
        'retailer'=>$retailer,
        'list_ids'=> $list_ids
        );

    show_template('add_product_popup', $data);
} else {
    die('Bums!');
}