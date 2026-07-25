<?php

$funcs = require_once __DIR__ . "/../../service/php/getAllProfesorClasses.php";

$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';

header("Content-Type: application/json");

echo $funcs["getProfesorClassesData"]($codigo);
?>