% Author: Iván, Daniels, Christian 
% Version: 0.1.0

% ENTIDAD: ESTUDIANTES
% estudiante(Cuenta, NombreCompleto, Correo, Carrera, IndiceAcademico)

estudiante('20221000759', 'Ivan Alessandro Díaz Villanueva', 'ivan.diaz@unah.hn', 'ingeniería en sistemas', 90).
estudiante('20221000760', 'Carlos Miguel Hernandez', 'carlos.martinez@unah.hn', 'ingeniería en sistemas', 79).
estudiante('20221000761', 'Maria Fernanda Antunez', 'maria.macarena@unah.hn', 'ingeniería en sistemas', 69).
estudiante('20221000762', 'Jose Antonio Salazar', 'jose@unah.hn', 'ingeniería en sistemas', 85).
estudiante('20211000123', 'Marta Antonieta Carías', 'mcarias@unah.hn', 'ingeniería en sistemas', 78).
estudiante('20231000112', 'Sofía Alejandra Martínez', 'sofia.martinez@unah.hn', 'ingeniería en sistemas', 88).
estudiante('20231000445', 'Diego Fernando Ramos', 'diego.ramos@unah.hn', 'ingeniería en sistemas', 74).
estudiante('20221000890', 'Lucía Gabriela Varela', 'lucia.varela@unah.hn', 'ingeniería en sistemas', 92).
estudiante('20241000234', 'Andrés Mauricio Castro', 'andres.castro@unah.hn', 'ingeniería en sistemas', 81).
estudiante('20211000956', 'Elena Beatriz Flores', 'elena.flores@unah.hn', 'ingeniería en sistemas', 76).
estudiante('20231000501', 'Juan Pablo Zelaya', 'jpzelaya@unah.hn', 'ingeniería en sistemas', 78).
estudiante('20231000502', 'Valeria Nicolle Paz', 'vnicolle@unah.hn', 'ingeniería en sistemas', 92).
estudiante('20221000503', 'Gabriel Alejandro Mejía', 'gabriel.mejia@unah.hn', 'ingeniería en sistemas', 62).
estudiante('20241000504', 'Camila Alejandra Sosa', 'camila.sosa@unah.hn', 'ingeniería en sistemas', 84).
estudiante('20211000505', 'Ricardo David Moncada', 'ricardo.moncada@unah.hn', 'ingeniería en sistemas', 70).
estudiante('20231000506', 'Daniela María Argueta', 'dargueta@unah.hn', 'ingeniería en sistemas', 75).
estudiante('20221000507', 'Eduardo Josué Bonilla', 'ejbonilla@unah.hn', 'ingeniería en sistemas', 68).
estudiante('20241000508', 'Sara Victoria Lanza', 'sara.lanza@unah.hn', 'ingeniería en sistemas', 98).
estudiante('20231000509', 'Fernando José Cruz', 'fcruz@unah.hn', 'ingeniería en sistemas', 81).
estudiante('20221000510', 'Andrea Michelle Madrid', 'amichelle@unah.hn', 'ingeniería en sistemas', 73).
estudiante('20231000511', 'Luis Armando Castro', 'lacastro@unah.hn', 'ingeniería en sistemas', 64).
estudiante('20211000512', 'Paola Alejandra Reyes', 'pareyes@unah.hn', 'ingeniería en sistemas', 85).
estudiante('20241000513', 'Marco Antonio Pineda', 'mapineda@unah.hn', 'ingeniería en sistemas', 77).
estudiante('20231000514', 'Gabriela Monserrat Videa', 'gmvidea@unah.hn', 'ingeniería en sistemas', 82).
estudiante('20221000515', 'Carlos Alberto Fúnez', 'cafunez@unah.hn', 'ingeniería en sistemas', 69).
estudiante('20231000516', 'Sofía Irene Ordóñez', 'sordonez@unah.hn', 'ingeniería en sistemas', 95).
estudiante('20241000517', 'Javier Ignacio Matamoros', 'jmatamoros@unah.hn', 'ingeniería en sistemas', 71).
estudiante('20221000518', 'Beatriz Elena Valladares', 'bvalladares@unah.hn', 'ingeniería en sistemas', 80).
estudiante('20231000519', 'Héctor Manuel Turcios', 'hturcios@unah.hn', 'ingeniería en sistemas', 66).

% ENTIDAD: PROFESORES
% profesor(CodigoProfesor, NombreCompleto, Correo)

profesor('0001', 'Miguel Angel Rodas', 'miguel.rodas@unah.hn').
profesor('0002', 'Juan Andres Ceballos', 'juan.ceballos@unah.hn').
profesor('0003', 'Mario José Gutierrez', 'mario.gutierrez@unah.hn').
profesor('0004', 'Ana Lucía Zelaya', 'ana.zelaya@unah.hn').
profesor('0005', 'Carlos Roberto Martínez', 'carlos.martinez@unah.hn').
profesor('0006', 'Elena María Castro', 'elena.castro@unah.hn').
profesor('0007', 'Ricardo Javier Mejía', 'ricardo.mejia@unah.hn').
profesor('0008', 'Sofía Alejandra Paz', 'sofia.paz@unah.hn').
profesor('0009', 'Diego Armando Flores', 'diego.flores@unah.hn').
profesor('0010', 'Valeria Gabriela Sosa', 'valeria.sosa@unah.hn').
profesor('0011', 'Eduardo Josué Varela', 'eduardo.varela@unah.hn').
profesor('0012', 'Daniela Irene Argueta', 'daniela.argueta@unah.hn').
profesor('0013', 'Marco Antonio Bonilla', 'marco.bonilla@unah.hn').
profesor('0014', 'Sara Victoria Lanza', 'sara.lanza@unah.hn').

% ENTIDAD: MATERIAS
% materia(CodigoMateria, NombreMateria, UnidadesValorativas, Prerrequisitos)

materia('ISC-101', 'Introduccion a la Ingenieria en Sistemas Computacionales', 4, 'Ninguno').
materia('EG-011', 'Espanol General', 4, 'Ninguno').
materia('MM-110', 'Matematica I', 5, 'Ninguno').
materia('SC-101', 'Sociologia', 4, 'Ninguno').
materia('IN-101', 'Optativa I: Campo de las Lenguas Extranjeras (Ingles I)', 4, 'Ninguno').
materia('ISC-102', 'Programacion Estructurada', 4, 'ISC-101').
materia('FF-101', 'Filosofia', 4, 'Ninguno').
materia('MM-111', 'Geometria y Trigonometria', 5, 'Ninguno').
materia('IN-102', 'Ingles II', 4, 'IN-101').
materia('ISC-103', 'Programacion Orientada a Objetos', 5, 'ISC-102').
materia('MM-201', 'Calculo I', 5, 'MM-110,MM-111').
materia('MM-211', 'Vectores y Matrices', 3, 'MM-110,MM-111').
materia('IN-103', 'Ingles III', 4, 'IN-102').
materia('MM-420', 'Matematica Discreta', 4, 'MM-110').
materia('MM-202', 'Calculo II', 5, 'MM-201,MM-211').
materia('FS-100', 'Fisica I', 5, 'MM-212,MM-211').
materia('HH-101', 'Historia de Honduras', 4, 'Ninguno').
materia('ISC-204', 'Paradigmas de Programacion', 4, 'ISC-103').
materia('MM-401', 'Estadistica I', 3, 'MM-202').
materia('FS-200', 'Fisica II', 5, 'FS-100,MM-202').
materia('ISC-211', 'Estructuras de Datos', 4, 'MM-420,MM-211,ISC-103').
materia('AGE-102', 'Administracion', 4, 'MM-401').
materia('IE-326', 'Instalaciones Electricas para Centros de Datos', 4, 'FS-200').
materia('ISC-321', 'Fundamentos de Base de Datos', 5, 'MM-420').
materia('ISC-351', 'Contabilidad Financiera', 4, 'AGE-102').
materia('ISC-331', 'Redes de Datos I', 4, 'IE-326').
materia('ISC-333', 'Sistemas Operativos I', 4, 'ISC-211').
materia('ISC-312', 'Teoria de la Computacion', 4, 'ISC-211,ISC-204').
materia('ISC-341', 'Sistemas de Informacion', 4, 'ISC-351').
materia('ISC-332', 'Redes de Datos II', 4, 'ISC-331').
materia('ISC-334', 'Sistemas Operativos II', 4, 'ISC-333').
materia('ISC-305', 'Programacion Web', 4, 'ISC-321').
materia('ISC-313', 'Compiladores', 4, 'ISC-312').
materia('ISC-306', 'Analisis de Requerimientos', 4, 'ISC-341,ISC-321,ISC-334').
materia('ISC-336', 'Diseno Digital', 4, 'ISC-334').
materia('ISC-407', 'Programacion Movil', 5, 'ISC-305').
materia('ISC-414', 'Inteligencia Artificial', 4, 'ISC-313,MM-401').
materia('ISC-435', 'Administracion de Servidores', 4, 'ISC-334,ISC-332').
materia('ISC-437', 'Arquitectura de Computadoras', 4, 'ISC-336').
materia('ISC-408', 'Ingenieria del Software', 4, 'ISC-306,ISC-407').
materia('ISC-422', 'Administracion de Base de Datos', 4, 'ISC-321').
materia('ISC-442', 'Seguridad Informatica', 4, 'ISC-435').
materia('ISC-443', 'Industria de TI', 4, 'ISC-306').
materia('ISC-409', 'Calidad de Software', 4, 'ISC-408').
materia('ISC-423', 'Ciencia de Datos', 4, 'ISC-422').
materia('ISC-415', 'Tecnologias Emergentes', 4, 'ISC-305,ISC-437,ISC-332').
materia('ISC-445', 'Proyectos de TI', 4, 'ISC-443,ISC-442').
materia('ISC-552', 'Seminario de Investigacion', 3, 'ISC-415,ISC-445,ISC-423').
materia('ISC-544', 'Auditoria Informatica', 4, 'ISC-442,ISC-306').
materia('ISC-546', 'Ejecucion de Proyectos de TI', 4, 'ISC-445').

% ENTIDAD: SECCIONES 
% seccion(IdSeccion, CodigoMateria, Hora, CodigoProfesor)

seccion('SEC-ISC101-0700', 'ISC-101', '0700', '0001').
seccion('SEC-ISC102-0700', 'ISC-102', '0700', '0001').
seccion('SEC-ISC102-0800', 'ISC-102', '0800', '0002').
seccion('SEC-ISC103-0800', 'ISC-103', '0800', '0003').
seccion('SEC-ISC103-0900', 'ISC-103', '0900', '0001').

% ENTIDAD: LABORATORIOS

laboratorio('0701', 'FS-200', 'E1', 'Laboratorio de Física').


% RELACIÓN: MATRÍCULA
% matriculado(CuentaEstudiante, IdSeccion)

matriculado('20221000759', 'SEC-ISC101-0700').
matriculado('20221000759', 'SEC-ISC103-0800').
matriculado('20221000760', 'SEC-ISC102-0800').
matriculado('20221000760', 'SEC-ISC101-0700').
matriculado('20221000760', 'SEC-ISC103-0800').
matriculado('20221000761', 'SEC-ISC103-0800').
matriculado('20221000762', 'SEC-ISC101-0700').
matriculado('20221000761', 'SEC-ISC101-0700').


% REGLAS LÓGICAS


% Verifica de qué profesor es alumno un estudiante según su sección real
es_alumno_de(NombreProfesor, NombreEstudiante):-
    profesor(CodigoProfesor, NombreProfesor, _),
    seccion(IdSeccion, _, _, CodigoProfesor),
    matriculado(CuentaEstudiante, IdSeccion),
    estudiante(CuentaEstudiante, NombreEstudiante, _, _, _).

% Muestra los alumnos matriculados en una sección específica
alumnos_en_seccion_de_profesor(NombreProfesor, CodigoMateria, NombreEstudiante) :-
    profesor(CodigoProfesor, NombreProfesor, _),
    seccion(IdSeccion, CodigoMateria, _, CodigoProfesor), 
    matriculado(CuentaEstudiante, IdSeccion),
    estudiante(CuentaEstudiante, NombreEstudiante, _, _, _).

% Lista de alumnos totales de un profesor
lista_alumnos_de_profesor(NombreProfesor, ListaAlumnos) :-
    findall(NombreEstudiante, es_alumno_de(NombreProfesor, NombreEstudiante), ListaAlumnos).

% Lista de alumnos en una sección concreta
lista_alumnos_seccion(NombreProfesor, CodigoMateria, ListaAlumnos) :-
    findall(NombreEstudiante, alumnos_en_seccion_de_profesor(NombreProfesor, CodigoMateria, NombreEstudiante), ListaAlumnos).

% Cruza la sección con la materia para obtener el nombre real de la clase
clases_de_alumno(NombreEstudiante, NombreMateria):-
    estudiante(CuentaEstudiante, NombreEstudiante, _, _, _),
    matriculado(CuentaEstudiante, IdSeccion),
    seccion(IdSeccion, CodigoMateria, _, _),
    materia(CodigoMateria, NombreMateria, _, _).

% Lista de clases matriculadas (Corregido el typo del nombre de la variable)
lista_clases_matriculadas(NombreEstudiante, ListaMaterias):-
    findall(NombreMateria, clases_de_alumno(NombreEstudiante, NombreMateria), ListaMaterias).

% RELACIÓN: MATERIAS APROBADAS

% materia_aprobada_por_estudiante(CuentaEstudiante, CodigoMateria)
materia_aprobada_por_estudiante('20221000759', 'ISC-101').

% Predicado base para evitar errores cuando no existan más hechos.
materia_aprobada_por_estudiante(_, _) :- fail.

% Verifica si un estudiante cumple los prerrequisitos de una materia.

validar_prerrequisitos(_, 'Ninguno').

validar_prerrequisitos(CuentaEstudiante, ListaPrerrequisitos) :-
    atomic_list_concat(Prerrequisitos, ',', ListaPrerrequisitos),
    forall(
        member(Materia, Prerrequisitos),
        materia_aprobada_por_estudiante(CuentaEstudiante, Materia)
    ).

% Verifica si un estudiante puede matricular una materia.

verificar_matricula(CuentaEstudiante, CodigoMateria) :-
    materia(CodigoMateria, NombreMateria, _, Prerrequisitos),
    (
        validar_prerrequisitos(CuentaEstudiante, Prerrequisitos)
        ->
        format('El estudiante puede matricular ~w.~n', [NombreMateria])
        ;
        format('ERROR: El estudiante NO puede matricular ~w.~n', [NombreMateria])
    ).