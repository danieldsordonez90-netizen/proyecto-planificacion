<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */
$funcs = require __DIR__ . '/../../service/php/clearAndCreateBackups.php';
header('Content-Type: application/json');
echo json_encode($funcs['createBackup']());