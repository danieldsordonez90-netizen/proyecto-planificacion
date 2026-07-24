<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */
$funcs = require __DIR__ . '/../../service/php/getAllStudents.php';

header('Content-Type: application/json');

// Ejecuta la función del servicio que invoca el comando de Prolog/Python
echo $funcs['getStudentsByTeacherData']();