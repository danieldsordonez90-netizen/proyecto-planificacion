<?php

$funcs = require_once __DIR__ . "/../../service/php/getAllStudentsList.php";

header("Content-Type: application/json");

echo $funcs["getAllStudentsData"]();
?>