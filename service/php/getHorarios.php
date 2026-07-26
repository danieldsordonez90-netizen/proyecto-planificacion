<?php

$getHorarios = fn() => 
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"planes_json\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            __DIR__ . "/../python/process_horarios.py"
        )
    ) ?? "[]";

return [
    "getHorarios" => $getHorarios
];