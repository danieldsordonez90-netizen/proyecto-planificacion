<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllClassData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(materia(Cod,Nom,Uv,Pre),format('~w,~w,~w,\'~w\'~n',[Cod,Nom,Uv,Pre]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_classes.py"
            )
        ) ?? ""
    );

return [
    "getAllClassData" => $getAllClassData
];