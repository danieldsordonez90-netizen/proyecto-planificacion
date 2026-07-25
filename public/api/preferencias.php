<?php

$action = isset($_GET['action']) ? $_GET['action'] : 'get';

$theme = isset($_GET['theme']) ? $_GET['theme'] : null;

$response = include '../../service/php/preferencias.php';

echo json_encode($response);
?>