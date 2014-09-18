<?php

//$base = ;
//
$url = @$_GET['url'] ?: "http://www.johnlewis.com/women/c50000298";

$parts = explode("/", $url);
$base = $parts[0].'//'.$parts[2];



$ch = curl_init();

// set url
curl_setopt($ch, CURLOPT_URL, $url);

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
//curl_setopt($ch, CURLOPT_VERBOSE, 1);
//curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');

// $output contains the output string
$html = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);



$html = str_replace('"//', '"##', $html);
$html = str_replace('"/', '"'.$base.'/', $html);
$html = str_replace('"##','"//', $html);

$cb = function($m){
    if ($m[2][0]=='#') return $m[0];
    return $m[1].'="/proxy/go.php?url='.urlencode($m[2]).'"';
};
$html = preg_replace_callback('#(<a[^>]+href)="([^"]+)"#', $cb, $html);

$html = preg_replace('#<script[^>]+richrelevance[^>]+></script>#', '', $html);

// Add custom scripts here
$scripts = array();
$scripts[] = 'http://hackathon.random.ometria.com/extension/extension.js';

foreach($scripts as $script){
    $html = str_replace('</body>', '<script src="'.$script.'"></script></body>', $html);
}

echo $html;