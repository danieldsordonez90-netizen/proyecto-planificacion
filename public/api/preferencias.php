<?php

/**
 * author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 * version 0.1.1
 * date 2026/07/22
 */

$action = isset($_GET['action']) ? $_GET['action'] : 'get';

$theme = isset($_GET['theme']) ? $_GET['theme'] : null;

$response = include '../../service/php/preferencias.php';

echo json_encode($response);
?>