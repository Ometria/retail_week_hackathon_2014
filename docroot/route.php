<?php
if (preg_match('/\.(?:png|jpg|jpeg|gif|js|css|ttf|svg|woff)$/', $_SERVER["REQUEST_URI"])) {
   return false;    // serve the requested resource as-is.
}

require('index.html');

?>
