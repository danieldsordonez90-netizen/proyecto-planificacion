<?php

$funcs = require_once __DIR__ . "/../../service/php/getHighestIndexPerClass.php";

$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';

header("Content-Type: application/json");

echo $funcs["getIndicesPorClaseData"]($codigo);
?>