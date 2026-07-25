
import {
    init, print, printAsAppend,
    h, p, box, columns,
    button, dialog, fetchJSON,
    initTheme, themeToggleButton
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

            const infoProfesor = document.createElement("span");
            infoProfesor.innerHTML = "<strong>" + pData.profesor_codigo + "</strong>: " + pData.profesor_name + " (" + pData.profesor_email + ") ";

            const linkAlumnos = document.createElement("a");
            linkAlumnos.textContent = "Ver alumnos";
            linkAlumnos.href = "#";
            linkAlumnos.style.marginLeft = "8px";
            linkAlumnos.style.color = "#05a437";
            linkAlumnos.style.textDecoration = "underline";
            linkAlumnos.style.cursor = "pointer";

            linkAlumnos.addEventListener("click", async function(event) {
                event.preventDefault();
                await cargarAlumnosPorProfesor(pData.profesor_codigo, pData.profesor_name);
            });

            const linkClases = document.createElement("a");
            linkClases.textContent = "Ver clases";
            linkClases.href = "#";
            linkClases.style.marginLeft = "8px";
            linkClases.style.color = "#05a437";
            linkClases.style.textDecoration = "underline";
            linkClases.style.cursor = "pointer";

            linkClases.addEventListener("click", async function(event) {
                event.preventDefault();
                await mostrarModalClasesProfesor(pData.profesor_codigo, pData.profesor_name);
            });

            li.appendChild(infoProfesor);
            li.appendChild(linkAlumnos);
            li.appendChild(linkClases);
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

            const infoMateria = document.createElement("span");
            infoMateria.innerHTML = "<strong>" + mData.materia_codigo + "</strong>: " + mData.materia_nombre + " (UV: " + mData.materia_uv + ") ";

            const linkRequisitos = document.createElement("a");
            linkRequisitos.textContent = "Ver requisitos";
            linkRequisitos.href = "#";
            linkRequisitos.style.marginLeft = "8px";
            linkRequisitos.style.color = "#05a437";
            linkRequisitos.style.textDecoration = "underline";
            linkRequisitos.style.cursor = "pointer";

            linkRequisitos.addEventListener("click", function(event) {
                event.preventDefault();
                mostrarModalRequisitos(mData.materia_codigo, mData.materia_nombre);
            });

            li.appendChild(infoMateria);
            li.appendChild(linkRequisitos);
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

        const infoEstudiante = document.createElement("span");
        infoEstudiante.innerHTML = "<strong>" + eData.codigo + "</strong>: " + eData.nombre + " ( " + eData.correo + " )";

        const linkClases = document.createElement("a");
        linkClases.textContent = "Ver clases cursadas";
        linkClases.href = "#";
        linkClases.style.marginLeft = "8px";
        linkClases.style.color = "#05a437";
        linkClases.style.textDecoration = "underline";
        linkClases.style.cursor = "pointer";

        linkClases.addEventListener("click", function(event) {
            event.preventDefault();
            mostrarModalClases(eData.codigo, eData.nombre);
        });

        li.appendChild(infoEstudiante);
        li.appendChild(linkClases);
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

    let contenidoHTML = "";
    
    if (resultado && resultado.length > 0) {
        let listaHTML = "<ul>";
        for (let i = 0; i < resultado.length; i++) {
            const item = resultado[i];
            listaHTML += "<li><strong>" + item.codigo + "</strong> - " + item.nombre + " | Índice: " + item.indice + "</li>";
        }
        listaHTML += "</ul>";
        contenidoHTML = listaHTML;
    } else {
        contenidoHTML = p("No se encontraron registros de índices globales.");
    }

    contenedorResultados.innerHTML += contenidoHTML;
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

        const infoMateria = document.createElement("span");
        infoMateria.innerHTML = "<strong>" + mData.materia_codigo + "</strong>: " + mData.materia_nombre + " (UV: " + mData.materia_uv + ") ";

        const linkIndices = document.createElement("a");
        linkIndices.textContent = "Ver índices";
        linkIndices.href = "#";
        linkIndices.style.marginLeft = "8px";
        linkIndices.style.color = "#05a437";
        linkIndices.style.textDecoration = "underline";
        linkIndices.style.cursor = "pointer";

        linkIndices.addEventListener("click", function(event) {
            event.preventDefault();
            mostrarModalIndicesPorClase(mData.materia_codigo, mData.materia_nombre);
        });

        li.appendChild(infoMateria);
        li.appendChild(linkIndices);
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

const modalBase = dialog("modal-aviso", "Estado de la Consulta", p("La petición ha sido procesada con éxito."));

document.getElementById('caja-acciones').appendChild(btnCargarProlog);
printAsAppend(modalBase);

printAsAppend(themeToggleButton());