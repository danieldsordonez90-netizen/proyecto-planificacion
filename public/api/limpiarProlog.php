<?php
/**
 * author jose.inestroza@unah.edu.hn, christian.vijil@unah.hn
 * version 0.1.0
 * date 2026/07/25
 */

$funcs = require __DIR__ . '/../../service/php/clearAndCreateBackups.php';
header('Content-Type: application/json');
echo json_encode($funcs['createBackup']());