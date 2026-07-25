<?php

/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getIndicesPorClaseData = fn($codigoMateria) => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"obtener_mejores_indices_clase('%s')\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            $codigoMateria,
            __DIR__ . "/../python/process_index_per_class.py"
        )
    ) ?? ""
);

return [
    "getIndicesPorClaseData" => $getIndicesPorClaseData
];
?>