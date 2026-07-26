<?php

/**
 * author jose.inestroza@unah.edu.hn, ivan.diaz@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require_once __DIR__ . "/../../service/php/getAllProfesorClasses.php";

$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';

header("Content-Type: application/json");

echo $funcs["getProfesorClassesData"]($codigo);
?>