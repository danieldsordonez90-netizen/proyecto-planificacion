
<?php

/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getProfesorClassesData = fn($codigo) => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"obtener_clases_profesor('%s')\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            $codigo,
            __DIR__ . "/../python/process_profesor_classes.py"
        )
    ) ?? ""
);

return [
    "getProfesorClassesData" => $getProfesorClassesData
];
?>