<?php
require('_init.php');

$user_id = $_GET['id'];

setcookie(COOKIE_KEY, $user_id, time()+3600*360, '/');