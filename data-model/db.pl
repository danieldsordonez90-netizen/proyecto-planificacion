
/*
    HECHO:Estudiantes, estan conformados por un numero de cuenta, su nombre, correo, carrera que estudian y su índice global.
    @author ivan.diaz@unah.hn
    @date 2026-07-18
    @since 2026-07-16
    @version 0.1.3
*/

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

/*
    HECHOS: Profesores, estan conformados por un código de profesor, su nombre y correo.

    @author ivan.diaz@unah.hn
    @date 2026-07-17
    @since 2026-07-16
    @version 0.1.1
*/
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

/*
    HECHO: Materia, estan conformados por un código de materia, su nombre, cantidad de créditos y sus prerrequisitos.

    @author ivan.diaz@unah.hn, danields.olivares@unah.hn
    @date 2026-07-18
    @since 2026-07-16
    @version 0.1.2
*/

materia('ISC-101', 'Introduccion a la Ingenieria en Sistemas Computacionales', 4, ['Ninguno']).
materia('EG-011', 'Espanol General', 4, ['Ninguno']).
materia('MM-110', 'Matematica I', 5, ['Ninguno']).
materia('SC-101', 'Sociologia', 4, ['Ninguno']).
materia('IN-101', 'Optativa I: Campo de las Lenguas Extranjeras (Ingles I)', 4, ['Ninguno']).
materia('ISC-102', 'Programacion Estructurada', 4, ['ISC-101']).
materia('FF-101', 'Filosofia', 4, ['Ninguno']).
materia('MM-111', 'Geometria y Trigonometria', 5, ['Ninguno']).
materia('IN-102', 'Ingles II', 4, ['IN-101']).
materia('ISC-103', 'Programacion Orientada a Objetos', 5, ['ISC-102']).
materia('MM-201', 'Calculo I', 5, ['MM-110,MM-111']).
materia('MM-211', 'Vectores y Matrices', 3, ['MM-110,MM-111']).
materia('IN-103', 'Ingles III', 4, ['IN-102']).
materia('MM-420', 'Matematica DISC-reta', 4, ['MM-110']).
materia('MM-202', 'Calculo II', 5, ['MM-201,MM-211']).
materia('FS-100', 'Fisica I', 5, ['MM-212,MM-211']).
materia('HH-101', 'Historia de Honduras', 4, ['Ninguno']).
materia('ISC-204', 'Paradigmas de Programacion', 4, ['ISC-103']).
materia('MM-401', 'Estadistica I', 3, ['MM-202']).
materia('FS-200', 'Fisica II', 5, ['FS-100,MM-202']).
materia('ISC-211', 'Estructuras de Datos', 4, ['MM-420,MM-211,ISC-103']).
materia('AGE-102', 'Administracion', 4, ['MM-401']).
materia('IE-326', 'Instalaciones Electricas para Centros de Datos', 4, ['FS-200']).
materia('ISC-321', 'Fundamentos de Base de Datos', 5, ['MM-420']).
materia('ISC-351', 'Contabilidad Financiera', 4, ['AGE-102']).
materia('ISC-331', 'Redes de Datos I', 4, ['IE-326']).
materia('ISC-333', 'Sistemas Operativos I', 4, ['ISC-211']).
materia('ISC-312', 'Teoria de la Computacion', 4, ['ISC-211,ISC-204']).
materia('ISC-341', 'Sistemas de Informacion', 4, ['ISC-351']).
materia('ISC-332', 'Redes de Datos II', 4, ['ISC-331']).
materia('ISC-334', 'Sistemas Operativos II', 4, ['ISC-333']).
materia('ISC-305', 'Programacion Web', 4, ['ISC-321']).
materia('ISC-313', 'Compiladores', 4, ['ISC-312']).
materia('ISC-306', 'Analisis de Requerimientos', 4, ['ISC-341,ISC-321,ISC-334']).
materia('ISC-336', 'Diseno Digital', 4, ['ISC-334']).
materia('ISC-407', 'Programacion Movil', 5, ['ISC-305']).
materia('ISC-414', 'Inteligencia Artificial', 4, ['ISC-313,MM-401']).
materia('ISC-435', 'Administracion de Servidores', 4, ['ISC-334,ISC-332']).
materia('ISC-437', 'Arquitectura de Computadoras', 4, ['ISC-336']).
materia('ISC-408', 'Ingenieria del Software', 4, ['ISC-306,ISC-407']).
materia('ISC-422', 'Administracion de Base de Datos', 4, ['ISC-321']).
materia('ISC-442', 'Seguridad Informatica', 4, ['ISC-435']).
materia('ISC-443', 'Industria de TI', 4, ['ISC-306']).
materia('ISC-409', 'Calidad de Software', 4, ['ISC-408']).
materia('ISC-423', 'Ciencia de Datos', 4, ['ISC-422']).
materia('ISC-415', 'Tecnologias Emergentes', 4, ['ISC-305,ISC-437,ISC-332']).
materia('ISC-445', 'Proyectos de TI', 4, ['ISC-443,ISC-442']).
materia('ISC-552', 'Seminario de Investigacion', 3, ['ISC-415,ISC-445,ISC-423']).
materia('ISC-544', 'Auditoria Informatica', 4, ['ISC-442,ISC-306']).
materia('ISC-546', 'Ejecucion de Proyectos de TI', 4, ['ISC-445']).

/*
    HECHO: Secciones, estan conformados por un código de sección, código de materia, horario y código de profesor.
    @author ivan.diaz@unah.hn, danields.olivares@unah.hn
    @version 0.1.2
    @date 2026-07-18
    @since 2026-07-16
*/
aula('B2', 'A101', 35).
aula('B2', 'A102', 35).
aula('B2', 'A103', 35).
aula('B2', 'A104', 35).
aula('B2', 'A105', 35).
aula('B2', 'A106', 40).
aula('B2', 'A107', 40).
aula('B2', 'A108', 40).
aula('B2', 'A109', 30).
aula('B2', 'A110', 30).
aula('E1', 'A101', 35).
aula('E1', 'A102', 35).
aula('E1', 'A103', 40).
aula('E1', 'A104', 40).
aula('E1', 'A105', 30).
aula('F1', 'A101', 40).
aula('F1', 'A102', 40).
aula('F1', 'A103', 45).
aula('F1', 'A104', 45).
aula('F1', 'A105', 50).

seccion('ISC101-0700', 'ISC-101', '0700', '0001', 'A101', 'B2').
seccion('ISC101-0800', 'ISC-101', '0800', '0002', 'A102', 'B2').
seccion('ISC101-1400', 'ISC-101', '1400', '0003', 'A103', 'B2').

seccion('ISC102-0800', 'ISC-102', '0800', '0003', 'A103', 'B2').
seccion('ISC102-0900', 'ISC-102', '0900', '0001', 'A101', 'B2').
seccion('ISC102-1500', 'ISC-102', '1500', '0009', 'A104', 'B2').

seccion('ISC201-0900', 'ISC-201', '0900', '0004', 'A104', 'B2').
seccion('ISC201-1000', 'ISC-201', '1000', '0005', 'A102', 'B2').
seccion('ISC201-1600', 'ISC-201', '1600', '0006', 'A105', 'B2').

seccion('ISC202-1000', 'ISC-202', '1000', '0005', 'A105', 'B2').
seccion('ISC202-1100', 'ISC-202', '1100', '0003', 'A103', 'B2').
seccion('ISC202-1700', 'ISC-202', '1700', '0002', 'A106', 'B2').

seccion('ISC203-0700', 'ISC-203', '0700', '0003', 'A103', 'B2').
seccion('ISC203-1200', 'ISC-203', '1200', '0001', 'A101', 'B2').
seccion('ISC203-1800', 'ISC-203', '1800', '0004', 'A104', 'B2').

seccion('ISC204-0800', 'ISC-204', '0800', '0005', 'A105', 'B2').
seccion('ISC204-1300', 'ISC-204', '1300', '0001', 'A101', 'B2').
seccion('ISC204-1700', 'ISC-204', '1700', '0003', 'A102', 'B2').

seccion('ISC301-0700', 'ISC-301', '0700', '0006', 'A106', 'B2').
seccion('ISC301-1100', 'ISC-301', '1100', '0006', 'A106', 'B2').
seccion('ISC301-1500', 'ISC-301', '1500', '0006', 'A101', 'B2').

seccion('ISC302-0800', 'ISC-302', '0800', '0007', 'A107', 'B2').
seccion('ISC302-1300', 'ISC-302', '1300', '0007', 'A107', 'B2').
seccion('ISC302-1600', 'ISC-302', '1600', '0008', 'A102', 'B2').

seccion('ISC303-0900', 'ISC-303', '0900', '0008', 'A108', 'B2').
seccion('ISC303-1400', 'ISC-303', '1400', '0005', 'A102', 'B2').
seccion('ISC303-1700', 'ISC-303', '1700', '0008', 'A103', 'B2').

seccion('ISC304-1000', 'ISC-304', '1000', '0006', 'A106', 'B2').
seccion('ISC304-1300', 'ISC-304', '1300', '0008', 'A103', 'B2').
seccion('ISC304-1800', 'ISC-304', '1800', '0005', 'A105', 'B2').

seccion('ISC305-0900', 'ISC-305', '0900', '0002', 'A102', 'B2').
seccion('ISC305-1400', 'ISC-305', '1400', '0004', 'A104', 'B2').
seccion('ISC305-1900', 'ISC-305', '1900', '0008', 'A108', 'B2').

seccion('ISC401-1000', 'ISC-401', '1000', '0009', 'A109', 'B2').
seccion('ISC401-1400', 'ISC-401', '1400', '0006', 'A108', 'B2').
seccion('ISC401-1800', 'ISC-401', '1800', '0009', 'A101', 'B2').

seccion('ISC402-0900', 'ISC-402', '0900', '0010', 'A110', 'B2').
seccion('ISC402-1200', 'ISC-402', '1200', '0010', 'A110', 'B2').
seccion('ISC402-1600', 'ISC-402', '1600', '0006', 'A109', 'B2').

seccion('ISC403-1100', 'ISC-403', '1100', '0008', 'A107', 'B2').
seccion('ISC403-1300', 'ISC-403', '1300', '0009', 'A109', 'B2').
seccion('ISC403-1700', 'ISC-403', '1700', '0010', 'A110', 'B2').

seccion('ISC404-0800', 'ISC-404', '0800', '0004', 'A104', 'B2').
seccion('ISC404-1200', 'ISC-404', '1200', '0002', 'A102', 'B2').
seccion('ISC404-1900', 'ISC-404', '1900', '0001', 'A101', 'B2').

seccion('ISC405-1000', 'ISC-405', '1000', '0001', 'A101', 'B2').
seccion('ISC405-1500', 'ISC-405', '1500', '0003', 'A103', 'B2').
seccion('ISC405-1800', 'ISC-405', '1800', '0008', 'A108', 'B2').

seccion('ISC406-0700', 'ISC-406', '0700', '0009', 'A109', 'B2').
seccion('ISC406-1100', 'ISC-406', '1100', '0012', 'A102', 'B2').
seccion('ISC406-1600', 'ISC-406', '1600', '0017', 'A107', 'B2').

seccion('ISC501-0700', 'ISC-501', '0700', '0010', 'A110', 'B2').
seccion('ISC501-1200', 'ISC-501', '1200', '0005', 'A105', 'B2').
seccion('ISC501-1600', 'ISC-501', '1600', '0005', 'A104', 'B2').

seccion('ISC502-0800', 'ISC-502', '0800', '0009', 'A109', 'B2').
seccion('ISC502-1300', 'ISC-502', '1300', '0011', 'A110', 'B2').
seccion('ISC502-1800', 'ISC-502', '1800', '0017', 'A102', 'B2').

seccion('ISC503-0900', 'ISC-503', '0900', '0007', 'A107', 'B2').
seccion('ISC503-1500', 'ISC-503', '1500', '0010', 'A110', 'B2').
seccion('ISC503-1700', 'ISC-503', '1700', '0009', 'A109', 'B2').

seccion('ISC504-1100', 'ISC-504', '1100', '0004', 'A104', 'B2').
seccion('ISC504-1500', 'ISC-504', '1500', '0002', 'A102', 'B2').
seccion('ISC504-1900', 'ISC-504', '1900', '0013', 'A103', 'B2').

seccion('ISC505-1000', 'ISC-505', '1000', '0007', 'A107', 'B2').
seccion('ISC505-1400', 'ISC-505', '1400', '0010', 'A110', 'B2').
seccion('ISC505-2000', 'ISC-505', '2000', '0006', 'A106', 'B2').

seccion('ISC506-0700', 'ISC-506', '0700', '0005', 'A105', 'B2').
seccion('ISC506-1300', 'ISC-506', '1300', '0006', 'A106', 'B2').
seccion('ISC506-1900', 'ISC-506', '1900', '0009', 'A109', 'B2').
/*

    HECHO: Laboratorios, estan conformados por un código de laboratorio, código de materia, horario y nombre del laboratorio.
    @author ivan.diaz@unah.hn
    @version 0.1.1
    @date 2026-07-18
    @since 2026-07-17
*/
laboratorio('0701', 'fs200', 'E1', 'Laboratorio de Física').

/*
    HECHO: Materias aprobadas por estudiantes, estan conformados por un número de cuenta y código de materia.
    @author ivan.diaz@unah.hn
    @version 0.1.1
    @date 2026-07-18
    @since 2026-07-17
    
*/
clase_cursada('20221000759', 'ISC-101', 75,'1PAC', '2025').
clase_cursada('20221000759', 'ISC-102', 28, '2PAC', '2025').


seccion_impartida('ISC101-0700', 'ISC-101', '0700', '0001', '1PAC', '2025').
seccion_impartida('ISC102-0900', 'ISC-102', '0900', '0001', '2PAC', '2025').



