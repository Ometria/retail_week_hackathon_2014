<?php

require('../_init.php');

$pid = $_REQUEST['pid'];
$retailer = $_REQUEST['retailer'];

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

$product = array();
$product['title'] = 'Asus C300 Chromebook, Intel Celeron, 2GB RAM, 32GB SSD, 13.3", Red';
$product['image'] = 'http://johnlewis.scene7.com/is/image/JohnLewis/233845648alt3?$prod_main$';
$product['price'] = 239.9;
$product['url'] = 'http://www.johnlewis.com/asus-c300-chromebook-intel-celeron-2gb-ram-32gb-ssd-13-3-red/p1625271';

$logo = 'http://www.johnlewis.com/assets/header/john-lewis-logo.gif';
$product['logo'] = image_thumbnail_url($logo, '200x20', 'resize');

$product_image = image_thumbnail_url($product['image'], '500x350', 'resizenp');
$price_formatted = '£'.sprintf('%01.2f',$product['price']);

if ($product) {

} else {

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/dist/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        .product-title{
        }
        .product-image{
            height:300px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .lists{
            margin: 30px 0 0 0;
            list-style:none;
            padding: 0px 10% !important;
        }
        .lists li{
            border : 1px solid red;
            margin:5px 0;
            font-size: 18px;
            background:#eee;
            border: 1px solid #ddd;
            width: 100%;
            padding: 8px;
        }
    </style>
</head>
<body>

    <div style="text-align:center">

        <div style="background:#eee;border-bottom: 1px solid #ccc;margin-bottom:14px;">
            <img src="/static/images/logo_grey.png" style="height:80px;padding:10px 0px 6px 0px;" />
        </div>

        <div>
            <h4 class="product-title"><?php echo esc($product['title']) ?></h4>
            <div class="product-image" style="background: url(<?php echo $product_image ?>) center no-repeat;"></div>
            <h4 class="product-price">
                <img src="<?php echo $product['logo'] ?>" style="height:20px;" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <?php echo $price_formatted ?>
                <?php if(@$product['url']): ?>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary" href="<?php echo $product['url'] ?>" target="_blank">Shop now &raquo;</a>
                <?php endif ?>
            </h4>
        </div>

        <ul class="lists">
            <li>List 1</li>
            <li>List 2</li>
        </ul>

    </div>

</body>
</html>