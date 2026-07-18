<?php

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllStudentData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(student(Id,Name,Email,Career,Average),format('~w,~w,~w,~w,~w~n',[Id,Name,Email,Career,Average]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../database/db.pl",
                __DIR__ . "/../python/process-prolog-answer.py"
            )
        ) ?? ""
    );

return [
    "getAllStudentData" => $getAllStudentData
];