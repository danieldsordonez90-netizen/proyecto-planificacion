<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllStudentData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "chcp 65001 >nul && set PYTHONIOENCODING=utf-8 && swipl -s \"%s\" -g \"forall(estudiante(Cue,Nom,Cor,Car,Ind),format('~w,~w,~w,~w,~w~n',[Cue,Nom,Cor,Car,Ind]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_students.py"
            )
        ) ?? ""
    );

//echo $getAllStudentData();

return [
    "getAllStudentData" => $getAllStudentData
];