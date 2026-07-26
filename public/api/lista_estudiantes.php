<?php

/**
 * author jose.inestroza@unah.edu.hn, ivan.diaz@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require_once __DIR__ . "/../../service/php/getAllStudentsList.php";

header("Content-Type: application/json");

echo $funcs["getAllStudentsData"]();
?>