<?php

function product_is_wishlisted($retailer, $pid){
    return false;
}

function lists_get(){
    return array();
}

function product_add_to_list($retailer, $pid, $list_id){
    return true;
}

function product_get($retailer, $pid){
    global $mongo;

    $key = $retailer.':'.$pid;

    $res = $mongo->products->findOne(array('_id'=>$key));

    return $res ? _product_map($res) : null;
}

function product_create($retailer, $pid, $data){
    global $mongo;

    $key = $retailer.':'.$pid;

    $data['_id'] = $key;
    $data['retailer'] = $retailer;
    $data['pid'] = $pid;

    $mongo->products->update(array('_id'=>$key), $data, array('upsert'=>true));

    return _product_map($data);
}

function _product_map($data){
    $ret = $data;
    unset($ret['_id']);
    return $ret;
}