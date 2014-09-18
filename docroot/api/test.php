<?php

require('_init.php');

//$lists = lists_get_for_user();

/*$res = products_find(array('retailer'=>'johnlewis'));

print_r($res);*/

$user = array();
$users[] = array('name'=>'Al','image'=>'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c17.17.207.207/s160x160/402381_10150547724551717_2138659984_n.jpg?oh=1721ddc429f88232391f6acf806ac18e&oe=548C6B29&__gda__=1418403173_57c8b2e1ce45be9c23d210fb5132b6b3');
$users[] = array('name'=>'Joshua','image'=>'http://i.imgur.com/J39RqFh.png');
$users[] = array('name'=>'Ed','image'=>'https://lh5.googleusercontent.com/-f-sskJ3f9wc/VBnJS0oQk7I/AAAAAAAAAyA/IAONoImyiss/s230/Screen%2BShot%2B2014-09-17%2Bat%2B18.47.29.png');
$users[] = array('_id'=>'test','name'=>'Rui','image'=>'https://scontent-b-mad.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/p180x540/10570464_780920845264527_8404809584525041628_n.jpg?oh=7c1e5bc2e3bb5de28c8ce7b35ea29eac&oe=548465EB');
$users[] = array('name'=>'Barak','image'=>'https://d3tgqgdprl4cx9.cloudfront.net/assets/v2/images/team/barak.jpg?v=6034a60a');

foreach($users as $user){
    if (!isset($user['_id'])) $user['_id'] = md5($user['name']);
    try{
        print_r($user);
        $mongo->users->insert($user);
    } catch(Exception $e) {

    }
}
