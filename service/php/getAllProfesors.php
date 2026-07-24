<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getProfesorData = fn() => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"forall(profesor(Codigo, Nombre, Correo), format('~w,~w,~w~n',[Codigo,Nombre,Correo]))\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            __DIR__ . "/../python/process_profesors.py"
        )
    ) ?? ""
);

return [
    "getProfesorData" => $getProfesorData
];
?>