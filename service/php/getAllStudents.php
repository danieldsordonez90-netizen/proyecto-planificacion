<?php
/**
 * Author: jose.inestroza@unah.edu.hn
 * Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
 * Version: 0.1.0
 */
$fixJson = fn($text) => str_replace("'", '"', $text);

$getStudentsByTeacherData = function($codigoProfesor = '') use ($fixJson) {
    if (empty($codigoProfesor) && isset($_GET['profesor'])) {
        $codigoProfesor = $_GET['profesor'];
    }

    // Aseguramos la ejecución limpia del goal en SWI-Prolog
    $comando = sprintf(
        "swipl -q -s \"%s\" -g \"estudiantes_de_profesor('%s', L), (member(estudiante(Cue, Nom), L), format('~w,~w~n', [Cue, Nom]), fail ; true)\" -t halt | python3 \"%s\"",
        __DIR__ . "/../../data-model/rules.pl",
        $codigoProfesor,
        __DIR__ . "/../python/process_students.py"
    );

    $output = shell_exec($comando) ?? "";
    return trim($output);
};

return [
    "getStudentsByTeacherData" => $getStudentsByTeacherData
];