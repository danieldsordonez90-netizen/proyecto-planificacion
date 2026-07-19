<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 * Módulo de Estadísticas - Índices para Gráfico Circular
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getStudentsIndices = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(estudiante(_,_,_,_,Ind), format('~w~n', [Ind]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_students_indices.py"
            )
        ) ?? ""
    );

return [
    "getStudentsIndices" => $getStudentsIndices
];