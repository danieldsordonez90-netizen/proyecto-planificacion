<?php

/**
 * author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */


$funcs = require __DIR__ . '/../../service/php/getAllProfesors.php';
header('Content-Type: application/json; charset=utf-8');
echo $funcs['getProfesorData']();

?>