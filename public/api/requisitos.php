<?php
$funcs = require __DIR__ . '/../../service/php/getRequeriments.php';
header('Content-Type: application/json; charset=utf-8');

$codigo = $_GET['codigo'] ?? '';
echo $funcs['getRequisitosData']($codigo);