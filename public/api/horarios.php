<?php

$funcs = require __DIR__ . '/../../service/php/getHorarios.php';
header('Content-Type: application/json');
echo $funcs['getHorarios']();