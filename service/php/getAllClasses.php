<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */
$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllClassData = function() use ($fixJson) {
    $cmd = sprintf(
        "swipl -s \"%s\" -g \"todas_las_materias, halt.\" | python3 \"%s\"",
        __DIR__ . "/../../data-model/rules.pl",
        __DIR__ . "/../python/process_classes.py"
    );
    
    $output = shell_exec($cmd);
    return $fixJson(trim($output ?? "[]"));
};

return [
    "getAllClassData" => $getAllClassData
];