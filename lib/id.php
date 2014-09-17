<?php

define('COOKIE_KEY', 'listaid');

if (!isset($_COOKIE[COOKIE_KEY])) {
    $user_id = md5(uniqid());
    setcookie(COOKIE_KEY, $user_id, time()+3600*360, '/');
    $_COOKIE[COOKIE_KEY] = $user_id;
}
define('USER_ID', $_COOKIE[COOKIE_KEY]);
