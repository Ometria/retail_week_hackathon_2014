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
            height:280px;
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
        .lists a{
            display:block;
        }
        .lists a:hover{
            text-decoration: none;
        }
        .lists span{
            padding-right: 10px;
        }
    </style>
</head>
<body>

    <div style="text-align:center">

        <div style="background:#eee;border-bottom: 1px solid #ccc;margin-bottom:14px;">
            <img src="/static/images/logo_grey.png" style="height:70px;padding:10px 0px 0px 0px;" />
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
            <?php foreach($lists as $list): ?>
            <li>
            <a href="?retailer=<?php echo $retailer ?>&amp;pid=<?php echo $pid ?>&amp;list=<?php echo $list['id'] ?>">
                <?php if(array_contains($list_ids, $list['id'])): ?>
                    <span>✔ </span>
                <?php endif ?>
                <?php echo esc($list['title'] ) ?>
            </a>
            </li>
            <?php endforeach ?>
        </ul>

    </div>

</body>
</html>