<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: Iván, Daniels, Christian
 * Version: 0.1.0
 */

$fixJson = fn($text) => str_replace("'", '"', $text);

$getAllSectionData = fn() =>
    $fixJson(
        shell_exec(
            sprintf(
                "swipl -s \"%s\" -g \"forall(seccion(Id,CodMat,Hora,CodProf),format('~w,~w,~w,~w~n',[Id,CodMat,Hora,CodProf]))\" -t halt | python3 \"%s\"",
                __DIR__ . "/../../data-model/db.pl",
                __DIR__ . "/../python/process_sections.py"
            )
        ) ?? ""
    );

return [
    "getAllSectionData" => $getAllSectionData
];