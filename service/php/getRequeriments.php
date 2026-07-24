<?php
$fixJson = fn($text) => str_replace("'", '"', $text);

$getRequerimentsData = fn($codigoMateria = '') => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"requisitos('%s')\" -t halt | python3 \"%s\" \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            empty($codigoMateria) ? ($_GET['codigo'] ?? '') : $codigoMateria,
            __DIR__ . "/../python/procces_requeriments.py",
            empty($codigoMateria) ? ($_GET['codigo'] ?? '') : $codigoMateria
        )
    ) ?? ""
);

return [
    "getRequerimentsData" => $getRequerimentsData
];
?>