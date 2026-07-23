:- consult('db.pl').

prerrequisito(CodigoMateria, Prerrequisitos) :-
    materia(CodigoMateria, _, _, Prerrequisitos).


estudiantes_de_profesor(CodProfesor, Cuenta, NombreEstudiante) :-
    clase_impartida(CodProfesor, CodMateria, _, Periodo, Anio),
    clase_cursada(Cuenta, CodMateria, _, Periodo, Anio),
    estudiante(Cuenta, NombreEstudiante, _, _, _).

% clase_cursada(CuentaEstudiante, CodigoMateria, Nota, Periodo, Anio)


clases_cursadas_de_estudiante(Cuenta, ListaClases) :-
    findall(
        materia(CodMateria, NombreMateria, Calificacion),
        (
            clase_cursada(Cuenta, CodMateria, Calificacion, _, _),
            materia(CodMateria, NombreMateria, _, _)
        ),
        ListaClases
    ),
    imprimir_en_filas(ListaClases).

imprimir_en_filas([]).
imprimir_en_filas([materia(CodMateria, NombreMateria, Calificacion) | Resto]) :-
    format('~w - ~w - ~w~n', [CodMateria, NombreMateria, Calificacion]),
    imprimir_en_filas(Resto).


tiene_laboratorio('FS-100').
tiene_laboratorio('ISC-102').

%-----------------------------------

/*
imparte_clase(CodProfesor, CodMateria, Horario, Periodo, Anio) :-
    profesor(CodProfesor, _, _),
    materia(CodMateria, _, _, _),
    horario(Horario),
    periodo(Periodo),
    anio(Anio).
*/

