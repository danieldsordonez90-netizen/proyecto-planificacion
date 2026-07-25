<?php

/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getClassesData = fn($cuenta) => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"obtener_clases_estudiante('%s')\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            $cuenta,
            __DIR__ . "/../python/process_student_classes.py"
        )
    ) ?? ""
);

return [
    "getClassesData" => $getClassesData
];
?>