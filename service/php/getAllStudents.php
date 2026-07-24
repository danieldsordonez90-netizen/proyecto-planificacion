<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */
$fixJson = fn($text) => str_replace("'", '"', $text);

$getStudentsByTeacherData = fn($codigoProfesor = '') => $fixJson(
    shell_exec(
        sprintf(
            "swipl -s \"%s\" -g \"estudiantes_de_profesor('%s', L), member(estudiante(Cue, Nom), L), format('~w,~w~n', [Cue, Nom]), fail ; true\" -t halt | python3 \"%s\"",
            __DIR__ . "/../../data-model/rules.pl",
            empty($codigoProfesor) ? ($_GET['profesor'] ?? '') : $codigoProfesor,
            __DIR__ . "/../python/process_students.py"
        )
    ) ?? ""
);

return [
    "getStudentsByTeacherData" => $getStudentsByTeacherData
];
?>