<?php

/**
 * author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$functions = include __DIR__ . "/../../service/php/getGlobalCounters.php";
$key = array_key_first($functions);
echo $functions[$key]();