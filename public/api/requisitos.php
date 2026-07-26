
<?php

/**
 * author jose.inestroza@unah.edu.hn, ivan.diaz@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require __DIR__ . '/../../service/php/getRequeriments.php';
header('Content-Type: application/json');

$codigo = $_GET['codigo'] ?? '';
echo $funcs['getRequerimentsData']($codigo);