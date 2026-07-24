<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */

$funcs = require __DIR__ . '/../../service/php/getAllProfesors.php';
header('Content-Type: application/json; charset=utf-8');
echo $funcs['getProfesorData']();

?>