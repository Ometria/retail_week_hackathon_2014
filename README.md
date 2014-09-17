retail_week_hackathon_2014
==========================

For the retail week hackathon

API
/api/check_product.php?retailer=XXX&pid=YYY
http://hackathon.random.ometria.com/api/check_product.php?retailer=johnlewis&pid=xxx

/api/get_lists.php

/api/add_product_to_list.php

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
?list=list_id optional
retailer=XXX optional

(no params for default list)

/api/create_list.php
title=IIIII
remove=true optional


All are POST or GET