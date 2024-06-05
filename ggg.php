<?php
header("Access-Control-Allow-origin: *");
header("Content-Type:application/json; charset=UTF-8");
header("Access-Control-Allow-Method:OPTIONS,GET,POST,PUT,DELETE ");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Header: Content-Type,Access-Control-Allow-Headers");

$data =file_get_contents("php://input");
print_r("pierre");
?>