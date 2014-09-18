<?php

require('_init.php');

$extended = @$_GET['extended']=='true';

$lists = lists_get_for_user($extended);

$deflist = array(
        'id'=>'def_'.current_user(),
        'title'=>'All stashes',
        'n_users'=>1,
        'date' => '13th September 2014'
        );

array_unshift($lists, $deflist);

$ret = array('lists'=>$lists);
send_json($ret);
