
<?php
$funcs = require __DIR__ . '/../../service/php/getRequeriments.php';
header('Content-Type: application/json');

$codigo = $_GET['codigo'] ?? '';
echo $funcs['getRequerimentsData']($codigo);