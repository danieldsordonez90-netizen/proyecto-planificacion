<?php

$funcs = require_once __DIR__ . "/../../service/php/getAllStudentClasses.php";

$cuenta = isset($_GET['cuenta']) ? $_GET['cuenta'] : '';

header("Content-Type: application/json");

echo $funcs['getClassesData']($cuenta);

?>