<?php

require('_init.php');

$where = array();
if (@$_GET['retailer']) $where['retailer'] = $_GET['retailer'];
$where['lists'] = (@$_GET['list']) ? $_GET['list'] : 'def_'.current_user();

$products = products_find($where);

$ret = array('products'=>$products);

if (@$_GET['list']) {
    $list = list_get($_GET['list']);
} else {
    $list = array(
        'id'=>'def_'.current_user(),
        'title'=>'All stashes',
        'n_users'=>1
        );
}

$ret['list'] = $list;

send_json($ret);
