<?php
$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllStudentsData = fn() => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"obtener_alumnos\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            __DIR__ . "/../python/process_students_list.py"
        )
    ) ?? ""
);

return [
    "getAllStudentsData" => $getAllStudentsData
];
?>