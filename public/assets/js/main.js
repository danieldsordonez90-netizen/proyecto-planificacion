import {
    init, print, printAsAppend,
    h, p, box, columns,
    button, dialog, fetchJSON
} from './modules/dom.mjs';

init('body');

const encabezado = box(
    h(1, "Sistema de Horarios Prolog"),
    "#3887c0"
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
    try {
        const profesores = await fetchJSON('./api/profesores.php');        
        if (!profesores || profesores.length === 0) {
            contenedorResultados.innerHTML = h(2, "Resultados") + p("No se encontraron profesores registrados.");
            return;
        }

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

            li.appendChild(infoProfesor);
            li.appendChild(linkAlumnos);
            ul.appendChild(li);
        }

        contenedorResultados.appendChild(ul);

    } catch (error) {
        console.error("Error al consultar la API de profesores:", error);
        contenedorResultados.innerHTML = h(2, "Resultados") + p("Ocurrió un error al obtener los datos de Prolog.");
    }
}

async function cargarAlumnosPorProfesor(codigoProfesor, nombreProfesor) {
    try {
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

    } catch (error) {
        console.error("Error al consultar alumnos del profesor:", error);
        alert("Ocurrió un error al cargar la lista de alumnos.");
    }
}

async function cargarSecciones() {
    const contenedorResultados = document.getElementById("caja-resultados");
    try {
        const secciones = await fetchJSON('./api/secciones.php');
        if (!secciones || secciones.length === 0) {
            contenedorResultados.innerHTML = h(2, "Resultados") + p("No se encontraron secciones registradas.");
            return;
        }

        contenedorResultados.innerHTML = h(2, "Secciones Registradas");

        const ul = document.createElement("ul");

        for (let i = 0; i < secciones.length; i++) {
            const sData = secciones[i];
            
            const li = document.createElement("li");
            li.style.marginBottom = "8px";

            const infoSeccion = document.createElement("span");
            infoSeccion.innerHTML = "<strong>" + sData.codigo + "</strong> - Materia: " + sData.codigoMateria + " | Hora: " + sData.hora + " | Docente: " + sData.docente + " | Aula: " + sData.aula + " (Periodo: " + sData.periodo + ")";

            li.appendChild(infoSeccion);
            ul.appendChild(li);
        }

        contenedorResultados.appendChild(ul);

    } catch (error) {
        console.error("Error al consultar la API de secciones:", error);
        contenedorResultados.innerHTML = h(2, "Resultados") + p("Ocurrió un error al obtener las secciones de Prolog.");
    }
}

async function cargarRequisitos() {
    const contenedorResultados = document.getElementById("caja-resultados");
    try {
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

    } catch (error) {
        console.error("Error al consultar la API de clases:", error);
        contenedorResultados.innerHTML = h(2, "Resultados") + p("Ocurrió un error al obtener las materias de Prolog.");
    }
}

async function mostrarModalRequisitos(codigoMateria, nombreMateria) {
    const modalExistente = document.getElementById("modal-requisitos");
    if (modalExistente) {
        modalExistente.remove();
    }

    const modalRequisitos = dialog(
        "modal-requisitos", 
        "Requisitos de " + nombreMateria, 
        p("Cargando requisitos...")
    );

    document.body.appendChild(modalRequisitos);
    modalRequisitos.showModal();

    try {
        const requisitos = await fetchJSON('./api/requisitos.php?codigo=' + codigoMateria);

        if (!requisitos || requisitos.length === 0) {
            modalRequisitos.querySelector("div").innerHTML = p("Esta materia no tiene prerrequisitos registrados.");
            return;
        }

        let listaHTML = "<ul>";
        for (let i = 0; i < requisitos.length; i++) {
            listaHTML += "<li>Requisito: <strong>" + requisitos[i].requisitos + "</strong></li>";
        }
        listaHTML += "</ul>";

        modalRequisitos.querySelector("div").innerHTML = listaHTML;

    } catch (error) {
        console.error("Error al consultar la API de requisitos:", error);
        modalRequisitos.querySelector("div").innerHTML = p("Ocurrió un error al obtener los requisitos.");
    }
}

const btnCargarProlog = button("Consultar Base de Conocimiento", () => {
    const cuadroExistente = document.getElementById("caja-opciones");
    if (cuadroExistente) {
        cuadroExistente.remove();
    }

    const HTMLNuevoCuadro = box(
        h(2, "Opciones Disponibles"),
        "#e8f4f8",
        "caja-opciones"
    );

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = HTMLNuevoCuadro;
    const nuevoCuadroNode = tempDiv.firstElementChild;

    const btnProf = button("Ver profesores", cargarProfesores);
    const btnSec = button("Ver secciones", cargarSecciones);
    const btnReq = button("Ver Requisitos de clases", cargarRequisitos);

    const contenedorBotones = document.createElement("div");
    contenedorBotones.style.display = "flex";
    contenedorBotones.style.flexDirection = "column";
    contenedorBotones.style.gap = "10px";
    contenedorBotones.style.marginTop = "15px";

    contenedorBotones.appendChild(btnProf);
    contenedorBotones.appendChild(btnSec);
    contenedorBotones.appendChild(btnReq);

    nuevoCuadroNode.appendChild(contenedorBotones);
    elementoColIzq.appendChild(nuevoCuadroNode);
});

const modalBase = dialog("modal-aviso", "Estado de la Consulta", p("La petición ha sido procesada con éxito."));

document.getElementById('caja-acciones').appendChild(btnCargarProlog);
printAsAppend(modalBase);