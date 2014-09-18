<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Stash: <?php echo esc($product['title']) ?></title>
    <link rel="stylesheet" href="/dist/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        h4 {
            font-size: 16px;
        }
        .product-title{
        }
        .product-image{
            height:230px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .lists{
            margin: 10px 0 0 0;
            list-style:none;
            padding: 0px 8px !important;
        }
        .lists li{
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
        .logo {
            height:50px;
            padding:10px 0px 0px 0px;
        }
        .product-details {
            margin-top: 65px;
        }
        .header {
            position: fixed;
            width: 100%;
            top: 0;
        }
        h4{
            font-size:14px;
            padding-top:0;
            font-weight: 200;
            padding: 0 8px;
        }
        li{
            font-weight: 100;
        }
        li div{
            display: inline-block;
        }
        li.selected{
            background:#feac7a;
            border: 1px solid #ce8c2a;
        }
        li.selected a{
            color: #fff;
        }
    </style>
</head>
<body>

    <div style="text-align:center">

        <div class="header" style="background:#eee;border-bottom: 1px solid #ccc;margin-bottom:6px;">
            <?php if($is_popup): ?>
            <a href="http://hackathon.random.ometria.com/lists/<?php echo $added_list_id ?>" target="_blank"><img class="logo" src="/static/images/logo_grey.png"/></a>
            <?php else: ?>
            <a href="http://hackathon.random.ometria.com/lists/<?php echo $added_list_id ?>"><img class="logo" src="/static/images/logo_grey.png"/></a>
            <?php endif ?>
        </div>

        <div class="product-details">
            <h4 class="product-title"><?php echo esc($product['title']) ?></h4>
            <div class="product-image" style="background: url(<?php echo $product_image ?>) center no-repeat;"></div>
            <h4 class="product-price">
                <img src="<?php echo $product['logo'] ?>" style="height:20px;" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <?php echo $price_formatted ?>

            </h4>
        </div>

        <ul class="lists">
            <?php foreach($lists as $list): ?>
            <li class="<?php if(array_contains($list_ids, $list['id'])): ?>selected<?php endif ?>">
            <a href="?retailer=<?php echo $retailer ?>&amp;pid=<?php echo $pid ?>&amp;list=<?php echo $list['id'] ?>">
                <?php if(array_contains($list_ids, $list['id'])): ?>
                    -
                <?php else: ?>
                    +
                <?php endif ?>
                <div><?php echo esc($list['title'] ) ?></div>
            </a>
            </li>
            <?php endforeach ?>
            <li>Add to new list</li>
        </ul>

    </div>

</body>
</html>