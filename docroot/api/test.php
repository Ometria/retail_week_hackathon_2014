<?php

require('_init.php');

//$lists = lists_get_for_user();

$res = products_find(array('retailer'=>'johnlewis'));

print_r($res);
