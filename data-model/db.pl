
estudiante('20221000759', 'Ivan Alessandro Díaz Villanueva', 'ivan.diaz@unah.hn', 'ingeniería en sistemas', 90).
estudiante('20221000760', 'Carlos Miguel Hernandez', 'carlos.martinez@unah.hn', 'ingeniería en sistemas', 79).
estudiante('20221000761', 'Maria Fernanda Antunez', 'maria.macarena@unah.hn', 'ingeniería en sistemas', 69).
estudiante('20221000762', 'Jose Antonio Salazar', 'jose@unah.hn', 'ingeniería en sistemas', 85).
estudiante('20211000123', 'Marta Antonieta Carías','mcarias@unah.hn','ingenieria en sistemas', 78).
estudiante('', '', '', '',).


profesor('0001', 'Miguel Angel Rodas', 'miguel.sauceda@unah.hn').
profesor('0002', 'Juan Andres Ceballos', 'juan.rodriguez@unah.hn').
profesor('0003', 'Mario José Gutierrez', 'mario.ramirez@unah.hn').

materia('isc101', 'paradigmas-de-programacion', 4).
materia('isc102', 'bases-de-datos', 5).
materia('isc103', 'inteligencia-artificial', 4).


seccion('isc101', '0700', '0001').
seccion('isc102', '0700', '0001').
seccion('isc102', '0800', '0002').
seccion('isc103', '0800', '0003').
seccion('isc103', '0900', '0001').

matriculado('20221000759', 'isc101').
matriculado('20221000759', 'isc103').
matriculado('20221000760', 'isc102').
matriculado('20221000760', 'isc101').
matriculado('20221000760', 'isc103').
matriculado('20221000761', 'isc103').
matriculado('20221000762', 'isc101').
matriculado('20221000761', 'isc101').

es_alumno_de(NombreProfesor, NombreEstudiante):-
    profesor(CodigoProfesor, NombreProfesor, _),
    seccion(CodigoMateria, _, CodigoProfesor),
    matriculado(CuentaEstudiante, CodigoMateria),
    estudiante(CuentaEstudiante, NombreEstudiante, _, _, _).

alumnos_en_seccion_de_profesor(NombreProfesor, CodigoMateria, NombreEstudiante) :-
    profesor(CodigoProfesor, NombreProfesor, _),
    seccion(CodigoMateria, _, CodigoProfesor), 
    matriculado(CuentaEstudiante, CodigoMateria),
    estudiante(CuentaEstudiante, NombreEstudiante, _, _, _).

lista_alumnos_de_profesor(NombreProfesor, ListaAlumnos) :-
    findall(NombreEstudiante, es_alumno_de(NombreProfesor, NombreEstudiante), ListaAlumnos).

lista_alumnos_seccion(NombreProfesor, CodigoMateria, ListaAlumnos) :-
    findall(NombreEstudiante, alumnos_en_seccion_de_profesor(NombreProfesor, CodigoMateria, NombreEstudiante), ListaAlumnos).
