<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getRequisitosData = fn($codigoMateria) =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(requisitos('%s', P), format('~w,~w~n',['%s',P]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/rules.pl",
                $codigoMateria,
                $codigoMateria,
                __DIR__ . "/../python/procces_requeriments.py"
            )
        ) ?? ""
    );

return [
    "getRequisitosData" => $getRequisitosData
];