<?php

require('_init.php');

$user = user_get_current();
$user['friends'] = $user['exists'] ? user_friends() : array();

send_json($user);
