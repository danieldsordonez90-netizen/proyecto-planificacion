<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */
$createBackup = function() {
    $backupContent = file_get_contents(__DIR__ . "/../../data-model/db.pl");

    if (!is_dir(__DIR__ . "/../../data-model/backups")) {
        mkdir(__DIR__ . "/../../data-model/backups");
    }

    $timeStamp = date("YmdHis");
    $backupName = "CDM_" . $timeStamp . ".pl";

    file_put_contents(__DIR__ . "/../../data-model/backups/" . $backupName, $backupContent);
    file_put_contents(__DIR__ . "/../../data-model/db.pl", "");

    return ["status" => "ok", "backup" => $backupName];

};

return [
    "createBackup" => $createBackup
];