<?php

require('_init.php');

$extended = @$_GET['extended']=='true';

$lists = lists_get_for_user($extended);

$ret = array('lists'=>$lists);
send_json($ret);
