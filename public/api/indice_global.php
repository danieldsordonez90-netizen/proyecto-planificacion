<?php
$funcs = require_once __DIR__ . "/../../service/php/getGlobalIndex.php";

header("Content-Type: application/json");
echo $funcs["getGlobalIndexData"]();
?>