
<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */
$funcs = require __DIR__ . '/../../service/php/getRequeriments.php';
header('Content-Type: application/json');

$codigo = $_GET['codigo'] ?? '';
echo $funcs['getRequerimentsData']($codigo);