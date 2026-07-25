<?php
// Recibimos los parámetros por GET
$action = isset($_GET['action']) ? $_GET['action'] : 'get';
$theme = isset($_GET['theme']) ? $_GET['theme'] : null;

// Invocamos el servicio usando include como estructura procedural
$response = include '../../service/php/preferencias.php';

// Retornamos estrictamente un JSON hacia el frontend
echo json_encode($response);
?>