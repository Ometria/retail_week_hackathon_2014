<?php

function send_json($result, $code=200){
    header('Content-type: application/json');
    echo json_encode($result);
}

function array_contains(&$arr, $item){
    return array_search($item, $arr)!==false;
}