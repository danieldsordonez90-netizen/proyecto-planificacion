import {
    init, print, printAsAppend,
    h, p, box, columns,
    button, dialog, fetchJSON,
    initTheme, themeToggleButton,
    buildStatsDialog, statsButton
} from './modules/dom.mjs';

init('body');
initTheme();

const encabezado = box(
    h(1, "Sistema de Horarios Prolog"),
    "#3887c0",
    "bg-blue"
);

const colIzqInicial = box(
    h(2, "Acciones"), 
    "#f2a4a4", 
    "caja-acciones" 
);

const colDer = box(
    h(2, "Resultados"), 
    "#e6ffcf", 
    "caja-resultados"
);

print(encabezado + columns(colIzqInicial, colDer));

const elementoColIzq = document.getElementById("caja-acciones").parentElement;
elementoColIzq.style.display = "flex";
elementoColIzq.style.flexDirection = "column";
elementoColIzq.style.gap = "20px";

async function cargarProfesores() {
    const contenedorResultados = document.getElementById("caja-resultados");
   
    const profesores = await fetchJSON('./api/profesores.php');        

    contenedorResultados.innerHTML = h(2, "Profesores Registrados");

    const ul = document.createElement("ul");

    for (let i = 0; i < profesores.length; i++) {
        const pData = profesores[i];
        
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        const infoProfesor = document.createElement("span");
        infoProfesor.innerHTML = "<strong>" + pData.profesor_codigo + "</strong>: " + pData.profesor_name + " (" + pData.profesor_email + ") ";

        const btnAlumnos = button("Ver alumnos", async () => {
            await cargarAlumnosPorProfesor(pData.profesor_codigo, pData.profesor_name);
        });

        const btnClases = button("Ver clases", async () => {
            await mostrarModalClasesProfesor(pData.profesor_codigo, pData.profesor_name);
        });

        li.appendChild(infoProfesor);
        li.appendChild(btnAlumnos);
        li.appendChild(btnClases);
        ul.appendChild(li);
    }

    contenedorResultados.appendChild(ul);
}

async function cargarAlumnosPorProfesor(codigoProfesor, nombreProfesor) {
    const estudiantes = await fetchJSON('./api/estudiantes.php?profesor=' + codigoProfesor);

    let contenidoHTML = "";

    if (!estudiantes || estudiantes.length === 0) {
        contenidoHTML = p("No hay alumnos asignados a este profesor.");
    } else {
        let listaHTML = "<ul>";
        for (let i = 0; i < estudiantes.length; i++) {
            const est = estudiantes[i];
            listaHTML += "<li><strong>" + est.estudiante_cuenta + "</strong>: " + est.estudiante_name + "</li>";
        }
        listaHTML += "</ul>";
        contenidoHTML = listaHTML;
    }

    const modalExistente = document.getElementById("modal-alumnos");
    if (modalExistente) {
        modalExistente.remove();
    }

    const modalAlumnos = dialog(
        "modal-alumnos", 
        "Alumnos de " + nombreProfesor, 
        contenidoHTML
    );

    document.body.appendChild(modalAlumnos);
    modalAlumnos.showModal();
}

async function mostrarModalClasesProfesor(codigoProfesor, nombreProfesor) {
    const modalExistente = document.getElementById("modal-clases-profesor");
    if (modalExistente) {
        modalExistente.remove();
    }

    const modalClases = dialog(
        "modal-clases-profesor", 
        "Clases de " + nombreProfesor
    );

    document.body.appendChild(modalClases);
    modalClases.showModal();

    const resultado = await fetchJSON('./api/clases_de_profesor.php?codigo=' + codigoProfesor);

    let contenidoHTML = "";
    
    if (resultado && resultado.length > 0) {
        let listaHTML = "<ul>";
        for (let i = 0; i < resultado.length; i++) {
            const clase = resultado[i];
            listaHTML += "<li><strong>" + clase.codigo + "</strong> - " + clase.nombre + " (Periodo: " + clase.periodo + " - " + clase.anio + ")</li>";
        }
        listaHTML += "</ul>";
        contenidoHTML = listaHTML;
    } else {
        contenidoHTML = p("No se encontraron clases registradas para este profesor.");
    }

    modalClases.querySelector("div").innerHTML = contenidoHTML;
}

async function cargarSecciones() {
    const contenedorResultados = document.getElementById("caja-resultados");
    
    const secciones = await fetchJSON('./api/secciones.php');
   
    contenedorResultados.innerHTML = h(2, "Secciones Registradas");

    const ul = document.createElement("ul");

    for (let i = 0; i < secciones.length; i++) {
        const sData = secciones[i];
        
        const li = document.createElement("li");
        li.style.marginBottom = "8px";

        const infoSeccion = document.createElement("span");
        infoSeccion.innerHTML = "<strong>" + sData.codigo + "</strong> - Materia: " + sData.codigoMateria + " | Hora: " + sData.hora + " | Docente: " + sData.docente + " | Aula: " + sData.aula + " (Edificio: " + sData.periodo + ")";

        li.appendChild(infoSeccion);
        ul.appendChild(li);
    }

    contenedorResultados.appendChild(ul);
}

async function cargarRequisitos() {
    const contenedorResultados = document.getElementById("caja-resultados");
  
    const materias = await fetchJSON('./api/materias.php');
    if (!materias || materias.length === 0) {
        contenedorResultados.innerHTML = h(2, "Resultados") + p("No se encontraron materias registradas.");
        return;
    }

    contenedorResultados.innerHTML = h(2, "Materias Registradas");

    const ul = document.createElement("ul");

    for (let i = 0; i < materias.length; i++) {
        const mData = materias[i];
        
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        const infoMateria = document.createElement("span");
        infoMateria.innerHTML = "<strong>" + mData.materia_codigo + "</strong>: " + mData.materia_nombre + " (UV: " + mData.materia_uv + ") ";

        const btnRequisitos = button("Ver requisitos", () => {
            mostrarModalRequisitos(mData.materia_codigo, mData.materia_nombre);
        });

        li.appendChild(infoMateria);
        li.appendChild(btnRequisitos);
        ul.appendChild(li);
    }

    contenedorResultados.appendChild(ul);
}

async function mostrarModalRequisitos(codigoMateria, nombreMateria) {
    const modalRequisitos = dialog(
        "modal-requisitos", 
        "Requisitos de " + nombreMateria
    );

    document.body.appendChild(modalRequisitos);
    modalRequisitos.showModal();

    const requisitos = await fetchJSON('./api/requisitos.php?codigo=' + codigoMateria);

    let listaHTML = "<ul>";
    for (let i = 0; i < requisitos.length; i++) {
        const req = requisitos[i].requisitos;
        if (!req || req === "Ninguno") {
            continue;
        }
        listaHTML += "<li>Requisito: <strong>" + req + "</strong></li>";
    }
    
    if (listaHTML === "<ul>") {
        listaHTML = p("Ninguno.");
    } else {
        listaHTML += "</ul>";
    }

    modalRequisitos.querySelector("div").innerHTML = listaHTML;
}

async function cargarTodosLosEstudiantes() {
    const contenedorResultados = document.getElementById("caja-resultados");
    
    const estudiantes = await fetchJSON('./api/lista_estudiantes.php');
    
    contenedorResultados.innerHTML = h(2, "Estudiantes Registrados");

    const ul = document.createElement("ul");

    for (let i = 0; i < estudiantes.length; i++) {
        const eData = estudiantes[i];
        
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        const infoEstudiante = document.createElement("span");
        infoEstudiante.innerHTML = "<strong>" + eData.codigo + "</strong>: " + eData.nombre + " ( " + eData.correo + " )";

        const btnClases = button("Ver clases cursadas", () => {
            mostrarModalClases(eData.codigo, eData.nombre);
        });

        li.appendChild(infoEstudiante);
        li.appendChild(btnClases);
        ul.appendChild(li);
    }

    contenedorResultados.appendChild(ul);
}

async function mostrarModalClases(codigoEstudiante, nombreEstudiante) {
    const modalExistente = document.getElementById("modal-clases");
    if (modalExistente) {
        modalExistente.remove();
    }

    const modalClases = dialog(
        "modal-clases", 
        "Clases cursadas por " + nombreEstudiante
    );

    document.body.appendChild(modalClases);
    modalClases.showModal();

    const resultado = await fetchJSON('./api/clases_de_estudiante.php?cuenta=' + codigoEstudiante);

    let contenidoHTML = "";
    
    if (resultado && resultado.length > 0) {
        let listaHTML = "<ul>";
        for (let i = 0; i < resultado.length; i++) {
            const clase = resultado[i];
            listaHTML += "<li><strong>" + clase.codigo + "</strong> - " + clase.nombre + " (Nota: " + clase.calificacion + "%)</li>";
        }
        listaHTML += "</ul>";
        contenidoHTML = listaHTML;
    } else {
        contenidoHTML = p("No se encontraron clases cursadas para este estudiante.");
    }

    modalClases.querySelector("div").innerHTML = contenidoHTML;
}

async function cargarIndicesGlobales() {
    const contenedorResultados = document.getElementById("caja-resultados");
    
    const resultado = await fetchJSON('./api/indice_global.php');
    
    contenedorResultados.innerHTML = h(2, "Mejores Índices Globales");

    if (resultado && resultado.length > 0) {
        const ul = document.createElement("ul");
        for (let i = 0; i < resultado.length; i++) {
            const item = resultado[i];
            const li = document.createElement("li");
            li.style.marginBottom = "8px";
            li.innerHTML = "<strong>" + item.codigo + "</strong> - " + item.nombre + " | Índice: " + item.indice;
            ul.appendChild(li);
        }
        contenedorResultados.appendChild(ul);
    } else {
        const mensajeVacio = document.createElement("div");
        mensajeVacio.innerHTML = p("No se encontraron registros de índices globales.");
        contenedorResultados.appendChild(mensajeVacio);
    }
}

async function cargarIndicesPorClase() {
    const contenedorResultados = document.getElementById("caja-resultados");
  
    const materias = await fetchJSON('./api/materias.php');
    if (!materias || materias.length === 0) {
        contenedorResultados.innerHTML = h(2, "Resultados") + p("No se encontraron materias registradas.");
        return;
    }

    contenedorResultados.innerHTML = h(2, "Materias - Mejores Índices por Clase");

    const ul = document.createElement("ul");

    for (let i = 0; i < materias.length; i++) {
        const mData = materias[i];
        
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";

        const infoMateria = document.createElement("span");
        infoMateria.innerHTML = "<strong>" + mData.materia_codigo + "</strong>: " + mData.materia_nombre + " (UV: " + mData.materia_uv + ") ";

        const btnIndices = button("Ver índices", () => {
            mostrarModalIndicesPorClase(mData.materia_codigo, mData.materia_nombre);
        });

        li.appendChild(infoMateria);
        li.appendChild(btnIndices);
        ul.appendChild(li);
    }

    contenedorResultados.appendChild(ul);
}

async function mostrarModalIndicesPorClase(codigoMateria, nombreMateria) {
    const modalExistente = document.getElementById("modal-indices-clase");
    if (modalExistente) {
        modalExistente.remove();
    }

    const modalIndices = dialog(
        "modal-indices-clase", 
        "Mejores índices en " + nombreMateria
    );

    document.body.appendChild(modalIndices);
    modalIndices.showModal();

    const resultado = await fetchJSON('./api/indice_por_clase.php?codigo=' + codigoMateria);

    let contenidoHTML = "";
    
    if (resultado && resultado.length > 0) {
        let listaHTML = "<ul>";
        for (let i = 0; i < resultado.length; i++) {
            const item = resultado[i];
            listaHTML += "<li><strong>" + item.codigo + "</strong> - " + item.nombre + " | Nota: " + item.indice + "</li>";
        }
        listaHTML += "</ul>";
        contenidoHTML = listaHTML;
    } else {
        contenidoHTML = p("No se encontraron registros de índices para esta clase.");
    }

    modalIndices.querySelector("div").innerHTML = contenidoHTML;
}

async function limpiarModeloDeDatos() {
    const confirmado = confirm("Seguro que desea limpiar el modelo de datos?");
    if (!confirmado) return;

    const resultado = await fetchJSON('./api/limpiarProlog.php');

    if (resultado && resultado.status === "ok") {
        alert("Modelo de datos limpiado. Respaldo creado: " + resultado.backup);
    } else {
        alert("Ocurrio un error al limpiar el modelo de datos.");
    }
}

const btnCargarProlog = button("Consultar Base de Conocimiento", () => {
    const cuadroExistente = document.getElementById("caja-opciones");

    if (cuadroExistente) return;

    const HTMLNuevoCuadro = box(
        h(2, "Opciones Disponibles"),
        "#a3eaff",
        "caja-opciones"
    );

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = HTMLNuevoCuadro;
    const nuevoCuadroNode = tempDiv.firstElementChild;

    const btnProf = button("Ver profesores", cargarProfesores);
    const btnSec = button("Ver secciones", cargarSecciones);
    const btnReq = button("Ver clases", cargarRequisitos);
    const btnEst = button("Ver estudiantes", cargarTodosLosEstudiantes);
    const btnIndGlobal = button("Indices globales", cargarIndicesGlobales);
    const btnIndClase = button("Indices por clase", cargarIndicesPorClase);

    const contenedorBotones = document.createElement("div");
    contenedorBotones.style.display = "flex";
    contenedorBotones.style.flexDirection = "column";
    contenedorBotones.style.gap = "10px";
    contenedorBotones.style.marginTop = "15px";

    contenedorBotones.appendChild(btnProf);
    contenedorBotones.appendChild(btnSec);
    contenedorBotones.appendChild(btnReq);
    contenedorBotones.appendChild(btnEst);
    contenedorBotones.appendChild(btnIndGlobal);
    contenedorBotones.appendChild(btnIndClase);

    nuevoCuadroNode.appendChild(contenedorBotones);
    elementoColIzq.appendChild(nuevoCuadroNode);
});

const btnLimpiar = button("Limpiar Modelo De Datos", limpiarModeloDeDatos);
document.getElementById('caja-acciones').appendChild(btnLimpiar);

const modalBase = dialog("modal-aviso", "Estado de la Consulta", p("La petición ha sido procesada con éxito."));

document.getElementById('caja-acciones').appendChild(btnCargarProlog);

document.getElementById('caja-acciones').appendChild(statsButton('Mostrar Indicadores'));

const contenidoAcercaDe = box(
    h(2, "1. Introducción y objetivo del sistema") +
    p("Se plantea el desarrollo de un sistema de planificación académica que permita en este caso al director académico o jefe de departamento gestionar las asignaturas, prerrequisitos, profesores asignados y estudiantes matriculados en cada asignatura, junto a las secciones disponibles y el cual dispone de un generador de horarios que genera por lo menos 4 horarios óptimos sin colisiones para así evitar la deserción estudiantil.") +
    p("Para el desarrollo de este sistema se utilizan los lenguajes PHP y JS como núcleo del sistema, Prolog como base de conocimiento para manejar la información y Python como lenguaje auxiliar escogido por el equipo.") +
    p("La información que se maneja dentro del sistema se hace de manera manual, el programa no cuenta con ningún formulario que permita añadir información a la base de conocimientos en PROLOG, todo lo que se necesite agregar o modificar, se hará directamente en el archivo llamado \"db.pl\" del sistema.") +
    p("Dado a que el sistema no cuenta con ningún formulario, las opciones que estarán disponibles para el programa serán solamente para visualización de los datos ingresados.") +

    h(2, "2. Arquitectura general: las dos SPAs") +
    p("El sistema se divide en dos SPAs (single page applications) en vez de una sola con varias vistas. Esto se debe a que se busca dividir el trabajo en tareas más pequeñas además de tener una mayor eficiencia en el manejo de la información a su vez que también se busca no sobrecargar la página principal de la aplicación con la lógica de planificación.") +
    p("La primera SPA designada a ser el panel principal permite la consulta y la búsqueda de asignaturas, prerrequisitos, profesores y estudiantes registrados en el sistema. Además, en esta misma, se puede visualizar las estadísticas del sistema, un cuadro de \"Ayuda\" y el un botón de \"Acerca de\" que permite visualizar la información general del proyecto.") +
    p("Esta SPA debe poder dirigir/navegar hacia la SPA2, la cual es la encargada de generar y filtrar las planificaciones de estudiantes. Estas se obtienen a partir de las secciones ya creadas anteriormente en PROLOG, el sistema verifica que las secciones no choquen con otras (ya sea por algún choque de aulas o de profesor) y de esta forma genera 4 posibles planificaciones.") +

    h(2, "3. Comunicación entre componentes") +
    p("Dado que el sistema es un sistema web, se debe comunicar con el servidor mediante peticiones http, asíncronas hacia endpoints en la carpeta api en la cual se encuentran los endpoints y las funciones que se ejecutan en el servidor al alcance de la url de la aplicación. Para esto se utiliza el método fetch() de javascript, el cual nos permite realizar peticiones http asíncronas al servidor de forma sencilla.") +
    p("Funciones de prolog y python las cuales ayudarán con las planificaciones se ejecutan en subprocesos, ejecutándose como programas externos y capturando su salida, dado a que es más simple que levantar un servidor propio para cada lenguaje.") +
    p("Digamos que un usuario desea consultar un reporte financiero suyo, para ello requiere de alguien que le elabore ese reporte pero se encuentra en su propia oficina y no se nos permite acceder a él, por lo que le pedimos a la recepcionista que le envíe la petición a ese empleado para que haga ese reporte y nos lo devuelva.") +
    p("De esta forma se evita tener que levantar un servidor propio para cada lenguaje y en lugar de eso solamente llamamos un subproceso que ejecute una función de ese lenguaje y nos devuelva la información que necesitamos. Las funciones de estos lenguajes están alojadas fuera del alcance de la url en su propia carpeta denominada service, donde se encuentran los archivos de prolog y python respectivamente.") +

    h(2, "4. Modelo de datos en Prolog") +
    p("La base de conocimientos estará registrada en el archivo llamado db.pl, este archivo sera llamado por otro archivo de prolog llamda rules.pl, de esta forma consultaremos desde este segundo archivo (que es donde tendremos nuestras reglas) a los hechos del primer archivo.") +
    p("Para el modelo de datos en prolog se utiliza la siguiente estructura basada en los hechos y reglas definidos en el sistema:") +
    "<ul>" +
    "<li><strong>estudiante</strong>: recibe el número de cuenta, nombre completo, correo institucional, carrera que estudia y el índice global correspondiente.</li>" +
    "<li><strong>profesor</strong>: recibe el código de profesor, nombre completo y correo institucional.</li>" +
    "<li><strong>materia</strong>: representa la asignatura en abstracto con su código, nombre, cantidad de créditos (UV) y sus prerrequisitos.</li>" +
    "<li><strong>aula</strong>: define las aulas disponibles con su edificio, código de aula y capacidad máxima.</li>" +
    "<li><strong>seccion</strong>: representa cada oferta concreta de una clase vinculando su código de sección, código de materia, hora, código del profesor, código de aula y edificio.</li>" +
    "<li><strong>laboratorio</strong>: especifica los laboratorios asociados a las materias, indicando su código, código de materia, horario y nombre.</li>" +
    "<li><strong>clase_cursada</strong> y <strong>clase_impartida</strong>: relacionan el historial académico de notas por periodo y año tanto para estudiantes como para profesores.</li>" +
    "<li><strong>nota_maxima_materia</strong> / <strong>mejor_estudiante_materia</strong>: obtienen al estudiante con la nota más alta en una materia específica.</li>" +
    "<li><strong>mejores_indices_globales</strong> / <strong>indices_globales</strong>: calculan la sumatoria ponderada basada en las calificaciones y unidades valorativas (UV) para ordenar y obtener los mejores índices de los estudiantes.</li>" +
    "<li><strong>generar_4_planes_estudio</strong> / <strong>es_compatible_dept</strong>: utilizan un generador de horarios óptimos mediante backtracking que evalúa la compatibilidad de secciones, horas, aulas y profesores para evitar colisiones y asegurar la variedad entre planes.</li>" +
    "</ul>" +

    h(2, "5. Generación de los 4 horarios y criterio de distinción") +
    p("Aprovechando el mecanismo de backtracking incluido en prolog, podemos generar múltiples horarios sin colisiones utilizando un criterio de similitud que nos ayudará a determinar cuántos horarios son iguales entre sí y quedándonos con los que mejor se ajusten a nuestro criterio de similitud, dado que prolog no reintenta desde cero al pedir una siguiente solución, sino que retoma el último punto de elección o choice point con alternativas no probadas.") +
    p("Para ese criterio de similitud se aplicará la siguiente lógica: En un horario se tienen 4 clases, si queremos un horario distinto con las mismas 4 clases, revisamos qué clases coinciden entre ambos horarios basándonos en la hora de la clase, la aula y el profesor. Dependiendo de la cantidad de clases que coincidan se considerará que el horario es igual o no, si el horario 1 y el horario 2 tienen dos clases que coinciden en la misma hora y sección se considera que son iguales, en cambio si solo una de las 4 clases coinciden en ambos horarios se considera que son horarios diferentes. Basándonos en esta lógica se espera poder generar 4 horarios distintos sin colisiones. En resumen, si existe un umbral de similitud del 25% o menor se considera que son distintos, de lo contrario se consideran iguales. Esta lógica reside en service desarrollándose en prolog.") +

    h(2, "6. Alcance de las operaciones sobre el modelo de datos (no es CRUD completo)") +
    p("Dado a que es específica en las restricciones del proyecto, el sistema implementa solamente Read y Delete en el sistema web, así evitando ingresar formularios web para crear o editar datos en el sistema, dado a que se especificó que el ingresar o manipular directamente los datos se realizará de forma manual en el archivo .pl de la base de conocimiento. De esta forma dejando en la página principal un botón para limpiar el modelo de datos, el cual vacía el archivo base y crea un archivo de respaldo guardándolo en una subcarpeta dentro de data-model denominada backups y nombrando al archivo con un formato CDM_YYYYMMDDHHMMSS, donde YYYYMMDDHHMMSS es la fecha y hora en que se ejecutó el proceso.") +

    h(2, "7. Frontend en paradigma funcional") +
    p("Para poder crear el diseño de la página principal, se utilizará principalmente funciones flecha que reciben como parámetros los datos necesarios para crear un elemento del DOM, así como un objeto CSS para asignar estilos dinámicamente a ese elemento. Usando un orquestador principal que llama a funciones pequeñas que ensamblan el resultado final, además para manejar el tema claro/oscuro, se guardará la preferencia en una carpeta fuera del alcance de la url llamada config en un archivo JSON, el cual será consultado por el orquestador principal y este le pasará como parámetro a las funciones pequeñas para que puedan aplicar el tema a su elemento. Se utilizará el componente \"Dialog\" para mostrar parte de la información solicitada, ya sea estudiantes, materias y demás elementos requeridos.") +

    h(2, "8. Estructura del proyecto") +
    p("Para la estructura del proyecto se utilizará el siguiente árbol de carpetas, y para poder acceder a los distintos archivos de cada una de las carpetas, se utilizará la función __DIR__ en lugar de rutas absolutas.") +
    
    h(2, "9. Módulo de estadísticas e indicadores de gestión") +
    p("La SPA 1 incorporará una sección de estadísticas generales para el jefe de departamento que mostrará contadores con el total de alumnos matriculados, profesores asignados, asignaturas y secciones creadas. También incluirá un diagrama circular que permite visualizar el promedio de notas de los estudiantes de la carrera, reflejando de forma visual el porcentaje de cuantos poseen un índice sobresaliente (80-100%), un índice regular (65-79%) y un índice bajo (0-65%)."),
    "",
    "cuerpo-acerca-de"
);

const modalAcercaDe = dialog(
    "modal-acerca-de", 
    "Acerca del Proyecto: Sistema de Planificación Académica", 
    contenidoAcercaDe
);

// Ajustar restricciones de tamaño para que el modal sea scrolleable y no cubra toda la ventana
const divInternoModal = modalAcercaDe.querySelector("div") || modalAcercaDe;
divInternoModal.style.maxWidth = "700px";
divInternoModal.style.width = "90%";
divInternoModal.style.overflowY = "auto";

document.body.appendChild(modalAcercaDe);

const btnAcercaDe = button("Acerca de", () => {
    modalAcercaDe.showModal();
});
document.getElementById('caja-acciones').appendChild(btnAcercaDe);

printAsAppend(modalBase);
printAsAppend(themeToggleButton());

const iniciarEstadisticasModal = async () => {
    const statsModalHTML = await buildStatsDialog();
    printAsAppend(statsModalHTML);
};
iniciarEstadisticasModal();

cargarIndicesGlobales();