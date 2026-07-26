<?php
/**
 * author jose.inestroza@unah.edu.hn, 
 * version 0.1.1
 * date 2026/07/22
 */

$funcs = require __DIR__ . '/../../service/php/clearAndCreateBackups.php';
header('Content-Type: application/json');
echo json_encode($funcs['createBackup']());