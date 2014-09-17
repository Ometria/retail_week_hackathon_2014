<?php

function send_json($result, $code=200){
    header('Content-type: application/json');
    echo json_encode($result);
}

function array_contains(&$arr, $item){
    return array_search($item, $arr)!==false;
}

function image_thumbnail_url($image_url, $w, $h, $resize_mode='EXACT'){
    // Hack
    if ($image_url==null) $image_url = 'https://console.ometria.com/static/v2/images/nophoto.jpg';
    $size = $w.'x'.$h;
    return 'https://slbznf.cloudimage.io/s/crop/'.$size.'/'.($image_url);
    //if ($resize_mode=='EXACT') $size = 's'.$size;
    //$hash = 'ometriai'.substr(md5($image_url),0,24);
    //$s1 = 'ometriai';
    //$s2 = substr($hash, 8,2);
    //return 'https://dkgq1jvp0mq2v.cloudfront.net/r/'.$s1.'/'.$s2.'/'.$hash.'/'.$size.'.jpg?url='.urlencode($image_url);
}