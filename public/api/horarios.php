<?php
/**
 * author jose.inestroza@unah.edu.hn, christian.vijil@unah.hn
 * version 0.1.1
 * date 2026/07/25
 */
$funcs = require __DIR__ . '/../../service/php/getHorarios.php';
header('Content-Type: application/json');
echo $funcs['getHorarios']();