<?php

require('_init.php');

$title = $_REQUEST['title'];

$list = list_create($title);

$ret = array('ok'=>true,'list'=>$list);
send_json($ret);
