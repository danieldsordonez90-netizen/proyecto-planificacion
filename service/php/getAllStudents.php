<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllStudentData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(estudiante(Cue,Nom,Cor,Car,Ind),format('~w,~w,~w,~w,~w~n',[Cue,Nom,Cor,Car,Ind]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_students.py"
            )
        ) ?? ""
    );

echo $getAllStudentData();

return [
    "getAllStudentData" => $getAllStudentData
];