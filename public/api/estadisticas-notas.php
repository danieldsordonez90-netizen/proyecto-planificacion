<?php

/**
 * author jose.inestroza@unah.edu.hn, ivan.diaz@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$functions = include __DIR__ . "/../../service/php/getEstadisticasNotas.php";
$key = array_key_first($functions);
echo $functions[$key]();