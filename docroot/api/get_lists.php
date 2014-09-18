<?php

require('_init.php');

$extended = @$_GET['extended']=='true';

$lists = lists_get_for_user($extended);

$def_list_id = 'def_'.current_user();
$deflist = array(
        'id'=>$def_list_id,
        'title'=>'All stashes',
        'n_users'=>1,
        'date' => '13th September 2014',
        );
    $deflist['n_products'] = products_count(array('lists'=>$def_list_id));

if ($extended){
    $deflist['products']=products_find(array('lists'=>$def_list_id), 10);
}

array_unshift($lists, $deflist);

$ret = array('lists'=>$lists);
send_json($ret);
