<?php
/**
 * author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require __DIR__ . '/../../service/php/getAllClasses.php';
header('Content-Type: application/json');
echo $funcs['getAllClassData']();