<?php

function send_json($result, $code=200){
    header('Content-type: application/json');
    echo json_encode($result);
}