<?php

//$base = ;

$url = @$_GET['url'] ?: "http://www.johnlewis.com";

$parts = explode("/", $url);
$base = $parts[0].'//'.$parts[2];

$html = file_get_contents($url);

$html = str_replace('"//', '"##', $html);
$html = str_replace('"/', '"'.$base.'/', $html);
$html = str_replace('"##','"//', $html);

$cb = function($m){
    if ($m[2][0]=='#') return $m[0];
    return $m[1].'="/proxy/go.php?url='.urlencode($m[2]).'"';
};
$html = preg_replace_callback('#(<a[^>]+href)="([^"]+)"#', $cb, $html);


// Add custom scripts here
$scripts = array();
$scripts[] = 'http://hackathon.random.ometria.com/extension/extension.js';

foreach($scripts as $script){
    $html = str_replace('</body>', '<script src="'.$script.'"></script></body>', $html);
}

echo $html;