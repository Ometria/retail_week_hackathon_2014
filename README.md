retail_week_hackathon_2014
==========================

For the retail week hackathon

API
/api/check_product.php?retailer=XXX&pid=YYY
http://hackathon.random.ometria.com/api/check_product.php?retailer=johnlewis&pid=xxx

/api/get_lists.php
http://hackathon.random.ometria.com/api/get_lists.php


With top 10 products per list:
/api/get_lists.php?extended=true
http://hackathon.random.ometria.com/api/get_lists.php?extended=true

/api/add_product_to_list.php
http://hackathon.random.ometria.com/api/add_product_to_list.php?retailer=johnlewis&pid=test13232&p_title=test22222&p_url=dsfdf&p_price=4&p_image=dsfdsf

pid=XXX
retailer=XXX
list=YYY optional (leave blank for default list)
remove=true optional

optional product info:
p_title
p_url
p_price
p_image_url


/api/get_products.php
http://hackathon.random.ometria.com/api/get_products.php

?list=list_id optional
retailer=XXX optional

(no params for default list)



/api/create_list.php
title=IIIII
remove=true optional


All are POST or GET