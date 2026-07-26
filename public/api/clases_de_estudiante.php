<?php

/**
 * author jose.inestroza@unah.edu.hn, ivan.diaz@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require_once __DIR__ . "/../../service/php/getAllStudentClasses.php";

$cuenta = isset($_GET['cuenta']) ? $_GET['cuenta'] : '';

header("Content-Type: application/json");

echo $funcs['getClassesData']($cuenta);

?>