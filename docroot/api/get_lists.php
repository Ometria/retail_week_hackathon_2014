<?php

require('_init.php');

$lists = lists_get_for_user();

$ret = array('lists'=>$lists);
send_json($ret);
