<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllProfesorData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(profesor(Id,Name,Email),format('~w,~w,~w~n',[Id,Name,Email]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_profesors.py"
            )
        ) ?? ""
    );


return [
    "getAllProfesorData" => $getAllProfesorData
];