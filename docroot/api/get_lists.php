<?php

require('_init.php');

$lists = lists_get();

$ret = array('lists'=>$lists);
send_json($ret);
