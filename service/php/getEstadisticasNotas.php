<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getEstadisticasNotasData = fn() => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"distribucion_notas(S,R,B), format('~w,~w,~w~n', [S,R,B])\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            __DIR__ . "/../python/process_estadisticas_notas.py"
        )
    ) ?? ""
);

return [
    "getEstadisticasNotasData" => $getEstadisticasNotasData
];
?>