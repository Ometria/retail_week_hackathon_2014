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





http://hackathon.random.ometria.com/api/setuser.php?id=test
http://hackathon.random.ometria.com/api/create_list.php?title=Test%20List1
http://hackathon.random.ometria.com/api/create_list.php?title=Test%20List2

http://hackathon.random.ometria.com/api/add_product_to_list.php?retailer=johnlewis&pid=p1625271&p_title=Asus+C300+Chromebook%2C+Intel+Celeron%2C+2GB+RAM%2C+32GB+SSD%2C+13.3%22%2C+Red&p_url=http%3A%2F%2Fwww.johnlewis.com%2Fasus-c300-chromebook-intel-celeron-2gb-ram-32gb-ssd-13-3-red%2Fp1625271&p_price=4&p_image=http%3A%2F%2Fjohnlewis.scene7.com%2Fis%2Fimage%2FJohnLewis%2F233845648alt3%3F%24prod_main%24

http://hackathon.random.ometria.com/api/show/add.php?retailer=johnlewis&pid=1612223
http://hackathon.random.ometria.com/api/show/add.php?retailer=johnlewis&pid=231618602
http://hackathon.random.ometria.com/api/show/add.php?retailer=johnlewis&pid=231617077

http://www.johnlewis.com/samsung-ue55hu7200-curved-4k-ultra-hd-smart-tv-55-with-freeview-freesat-hd/p1612223

http://www.johnlewis.com/dualit-2-slice-toaster-with-warming-rack/p231618602

http://www.johnlewis.com/dualit-emma-bridgewater-newgen-toaster-2-slice-polka-dots/p231617077


