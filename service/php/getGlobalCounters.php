<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 * Módulo de Estadísticas - Contadores Globales
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getGlobalCounters = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -l \"%s\" -g \"contadores_globales(TotalEst, TotalProf, TotalMat, TotalSec), format('~w,~w,~w,~w~n', [TotalEst, TotalProf, TotalMat, TotalSec]), halt\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../../data-model/rules.pl",
                __DIR__ . "/../python/process_global_counters.py"
            )
        ) ?? ""
    );

return [
    "getGlobalCounters" => $getGlobalCounters
];