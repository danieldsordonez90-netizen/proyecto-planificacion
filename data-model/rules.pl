:- consult('db.pl').

todas_las_secciones :-
    forall(
        seccion(CodSec, CodMateria, Hora, Docente, Aula, Edificio),
        format('~w,~w,~w,~w,~w,~w~n', [CodSec, CodMateria, Hora, Docente, Aula, Edificio])
    ).

requisitos(CodigoMateria) :-
    materia(CodigoMateria, _, _, ListaRequisitos),
    imprimir_requisitos(ListaRequisitos).

imprimir_requisitos([]).
imprimir_requisitos([Req|Resto]) :-
    format('~w~n', [Req]),
    imprimir_requisitos(Resto).

todas_las_materias :-
    findall(
        (Cod, Nom, Uv, Requisitos),
        (materia(Cod, Nom, Uv, Requisitos), sub_atom(Cod, 0, 3, _, 'ISC')),
        ListaMaterias
    ),
    imprimir_materias(ListaMaterias).

imprimir_materias([]).
imprimir_materias([(Cod, Nom, Uv, Requisitos)|Resto]) :-
    format('~w,~w,~w,~w~n', [Cod, Nom, Uv, Requisitos]),
    imprimir_materias(Resto).

obtener_profesores :-
    forall(
        profesor(Codigo, Nombre, Email),
        format('~w,~w,~w~n', [Codigo, Nombre, Email])
    ).

obtener_alumnos :-
    forall(
        estudiante(Codigo, Nombre, Correo, Carrera),
        format('~w,~w,~w,~w~n',
               [Codigo, Nombre, Correo, Carrera])
    ).

estudiantes_de_profesor(CodProf, ListaEstudiantes) :-
    findall(
        estudiante(Cuenta, Nombre),
        (
            clase_impartida(CodMateria, CodProf, Periodo, Anio),
            clase_cursada(Cuenta, CodMateria, _Nota, Periodo, Anio),
            estudiante(Cuenta, Nombre, _, _)
        ),
        ListaConDuplicados
    ),
    sort(ListaConDuplicados, ListaEstudiantes).

clases_cursadas_de_estudiante(Cuenta, ListaClases) :-
    findall(
        materia(CodMateria, NombreMateria, Calificacion),
        (
            clase_cursada(Cuenta, CodMateria, Calificacion, _, _),
            materia(CodMateria, NombreMateria, _, _)
        ),
        ListaClases
    ).

nota_maxima_materia(CodMateria, NotaMax) :-
    findall(Nota, clase_cursada(_, CodMateria, Nota, _, _), Notas),
    Notas \= [],
    max_list(Notas, NotaMax).

mejor_estudiante_materia(CodMateria, Cuenta, Nombre, NotaMax) :-
    nota_maxima_materia(CodMateria, NotaMax),
    clase_cursada(Cuenta, CodMateria, NotaMax, _, _),
    estudiante(Cuenta, Nombre, _, _).

historial_estudiante(Cuenta, Historial) :-
    findall(
        registro(CodMateria, NombreMateria, Calificacion, Estado, Periodo, Anio),
        (
            clase_cursada(Cuenta, CodMateria, Calificacion, Periodo, Anio),
            materia(CodMateria, NombreMateria, _, _),
            (Calificacion >= 65 -> Estado = 'Aprobada' ; Estado = 'Reprobada')
        ),
        Historial
    ).


secciones_colisionan_dept(Sec1, Sec2) :-
    seccion(Sec1, _, Hora, Docente1, Aula1, _),
    seccion(Sec2, _, Hora, Docente2, Aula2, _),
    (Docente1 == Docente2 ; Aula1 == Aula2).

es_compatible_dept(_, []).
es_compatible_dept(Sec, [Cabeza|Cola]) :-
    Sec \== Cabeza,
    \+ secciones_colisionan_dept(Sec, Cabeza),
    es_compatible_dept(Sec, Cola).

diferencia_planes([], [], 0).
diferencia_planes([S1|R1], [S2|R2], Dif) :-
    diferencia_planes(R1, R2, DifResto),
    (S1 \== S2 -> Dif is DifResto + 1 ; Dif = DifResto).

es_plan_diferente(_, []).
es_plan_diferente(NuevoPlan, [PlanExistente|Resto]) :-
    diferencia_planes(NuevoPlan, PlanExistente, Dif),
    Dif >= 5,
    es_plan_diferente(NuevoPlan, Resto).

materias_disponibles_sistemas(ListaMateriasConSecciones) :-
    findall(CodMateria, (
        seccion(_, CodMateria, _, _, _, _),
        sub_atom(CodMateria, 0, 3, _, 'ISC')
    ), MateriasBruta),
    sort(MateriasBruta, MateriasUnicas),
    findall(
        materia_sec(CodMateria, Secciones),
        (
            member(CodMateria, MateriasUnicas),
            findall(CodSec, seccion(CodSec, CodMateria, _, _, _, _), Secciones)
        ),
        ListaMateriasConSecciones
    ).

construir_plan_estudio([], []).
construir_plan_estudio([materia_sec(_, Secciones)|RestoMaterias], [SecElegida|RestoPlan]) :-
    random_permutation(Secciones, SeccionesBarajadas),
    member(SecElegida, SeccionesBarajadas),
    construir_plan_estudio(RestoMaterias, RestoPlan),
    es_compatible_dept(SecElegida, RestoPlan).

generar_n_planes_diferentes(0, _, _, []) :- !.
generar_n_planes_diferentes(N, Estructura, Acumulados, [Plan|RestoPlanes]) :-
    N > 0,
    construir_plan_estudio(Estructura, Plan),
    es_plan_diferente(Plan, Acumulados),
    !,
    N1 is N - 1,
    generar_n_planes_diferentes(N1, Estructura, [Plan|Acumulados], RestoPlanes).

generar_4_planes_estudio(CuatroPlanes) :-
    materias_disponibles_sistemas(EstructuraMaterias),
    generar_n_planes_diferentes(4, EstructuraMaterias, [], CuatroPlanes).

imprimir_4_planes :-
    set_prolog_flag(answer_write_options, [max_depth(0)]),
    generar_4_planes_estudio(Planes),
    forall(
        member(Plan, Planes),
        (writeln('--------------------------------------------------'), writeln(Plan))
    ).


% Calcula la suma ponderada (Nota * UV) y el total de UV de un estudiante
sumatoria_ponderada(Estudiante, SumaPonderada, TotalUV) :-
    findall(
        Ponderacion,
        (
            clase_cursada(Estudiante, CodMateria, Nota, _, _),
            materia(CodMateria, _, UV, _),
            Ponderacion is Nota * UV
        ),
        ListaPonderaciones
    ),
    findall(
        UV,
        (
            clase_cursada(Estudiante, CodMateria, _, _, _),
            materia(CodMateria, _, UV, _)
        ),
        ListaUVs
    ),
    sum_list(ListaPonderaciones, SumaPonderada),
    sum_list(ListaUVs, TotalUV).

% Regla principal para obtener el índice global de un estudiante con redondeo a 2 decimales
indice_global(Estudiante, IndiceFinal) :-
    sumatoria_ponderada(Estudiante, SumaPonderada, TotalUV),
    TotalUV > 0, % Evita división por cero
    IndiceUnico is SumaPonderada / TotalUV,
    IndiceFinal is round(IndiceUnico * 100) / 100.

mejor_estudiante_carrera(Cuenta, Nombre, PromedioMax) :-
    findall(
        C-Prom, (estudiante(C, _, _, _), indice_global(C, Prom)), Promedios
    ),
    Promedios \= [],
    findall(P, member(_-P, Promedios), ListaPromedios),
    max_list(ListaPromedios, PromedioMax),
    member(Cuenta-PromedioMax, Promedios),
    estudiante(Cuenta, Nombre, _, _).