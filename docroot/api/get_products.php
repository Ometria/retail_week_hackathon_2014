<?php

require('_init.php');

$where = array();
if (@$_GET['retailer']) $where['retailer'] = $_GET['retailer'];
$where['lists'] = (@$_GET['list']) ? $_GET['list'] : 'def_'.current_user();

$products = products_find($where);

$ret = array('products'=>$products);
send_json($ret);
