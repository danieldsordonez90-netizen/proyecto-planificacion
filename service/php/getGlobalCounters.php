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
                "swipl -s \"%s\" -g \"findall(Cue, estudiante(Cue,_,_,_,_), L1), length(L1, TotalEst), findall(Id, profesor(Id,_,_), L2), length(L2, TotalProf), findall(Cod, materia(Cod,_,_,_), L3), length(L3, TotalMat), findall(IdS, seccion(IdS,_,_,_), L4), length(L4, TotalSec), format('~w,~w,~w,~w~n', [TotalEst, TotalProf, TotalMat, TotalSec])\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_global_counters.py"
                )
        ) ?? ""
    );

return [
    "getGlobalCounters" => $getGlobalCounters
];