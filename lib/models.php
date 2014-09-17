<?php

function product_is_wishlisted($retailer, $pid){
    return false;
}

function lists_get_for_user(){
    global $mongo;

    $where = array(
        'uids' => current_user()
        );
    $lists = $mongo->lists->find($where);

    return array_values(array_map('_map_list', iterator_to_array($lists)));
}

function list_create($title){
    global $mongo;

    $row = array();
    $row['title'] = $title;
    $row['uids'] = array(current_user());
    $row['_ts_create'] = time();

    $mongo->lists->insert($row);

    return $row;
}

function list_remove($id){

}

function products_find($where){
    global $mongo;

    $items = $mongo->products->find($where);

    return array_values(array_map('_map_product', iterator_to_array($items)));
}


function product_add_to_list($retailer, $pid, $list_id, $add=true){
    global $mongo;

    $key = $retailer.':'.$pid;

    $update = array('$addToSet'=>array('lists'=>$list_id));
    $where = array('_id'=>$key);

    $mongo->products->update($where, $update);
}

function product_get($retailer, $pid){
    global $mongo;

    $key = $retailer.':'.$pid;

    $res = $mongo->products->findOne(array('_id'=>$key));

    return $res ? _map_product($res) : null;
}

function product_create($retailer, $pid, $data){
    global $mongo;

    $key = $retailer.':'.$pid;

    $data['_id'] = $key;
    $data['retailer'] = $retailer;
    $data['pid'] = $pid;
    $data['lists'] = array();

    $mongo->products->update(array('_id'=>$key), $data, array('upsert'=>true));

    return _map_product($data);
}

function _map_product($data){
    $ret = remove_private($data);
    return $ret;
}

function _map_list($row){
    $row['id'] = strval($row['_id']);
    unset($row['_id']);
    $row = remove_private($row);
    return $row;
}

function remove_private($data){
    $ret = array();

    foreach($data as $k=>$v){
        if ($k[0]!='_') $ret[$k]=$v;
    }

    return $ret;
}