<?php

function product_is_wishlisted($retailer, $pid){
    $product = product_get_raw($retailer, $pid);

    $lists = lists_get_for_user();
    $list_ids = array();
    foreach($lists as $list){
        $list_ids[] = $list['id'];
    }
    $list_ids[] = 'def_'.current_user();

    if ($product) {
        $lists = @$product['lists'] ?: array();
        foreach($list_ids as $list_id) if (array_contains($lists, $list_id)) return true;
    }

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

function list_share($list_id, $user_id){
    global $mongo;

    $update = array('$addToSet'=>array('uids'=>$user_id));
    $where = array('_id'=>$list_id);

    $mongo->lists->update($where, $update);
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

function product_remove_from_list($retailer, $pid, $list_id){
    global $mongo;

    $key = $retailer.':'.$pid;

    $update = array('$pull'=>array('lists'=>$list_id));
    $where = array('_id'=>$key);

    $mongo->products->update($where, $update);
}

function product_add_to_list($retailer, $pid, $list_id){
    global $mongo;

    $key = $retailer.':'.$pid;

    $update = array('$addToSet'=>array('lists'=>$list_id));
    $where = array('_id'=>$key);

    $mongo->products->update($where, $update);
}

function product_get_raw($retailer, $pid){
    global $mongo;

    $key = $retailer.':'.$pid;

    $res = $mongo->products->findOne(array('_id'=>$key));

    return $res;
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
    unset($ret['lists']);
    return $ret;
}

function _map_list($row){
    $row['id'] = strval($row['_id']);
    unset($row['_id']);
    $row['#users'] = count($row['uids']);
    unset($row['uids']);
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