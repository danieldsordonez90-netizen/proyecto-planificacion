<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */
$functions = include __DIR__ . "/../../service/php/getGlobalCounters.php";
$key = array_key_first($functions);
echo $functions[$key]();