// Un solo import extremadamente limpio gracias al "barrel file"
import {
    init, print, printAsAppend,
    h, p, box, columns,
    button, dialog, fetchJSON
} from './modules/dom.mjs';

// Inicializamos en el documento
init('body');

// 1. GENERACIÓN DEL LAYOUT (Strings estáticos)
const encabezado = box(
    h(1, "Sistema de Horarios Prolog") + 
    p("Desarrollado con Arquitectura JS Modular Pura."),
    "#e3f2fd"
);

// Caja izquierda con un "ID" para inyectarle los Nodos de eventos más tarde
const colIzq = box(
    h(2, "Acciones"), 
    "#f5f5f5", 
    "caja-acciones" 
);

const colDer = box(
    h(2, "Resultados") + 
    p("📍 [PLACEHOLDER PARA EL ESTUDIANTE: Aquí irán las respuestas de Prolog]"), 
    "#ffffff", 
    "caja-resultados"
);

// Imprimimos la estructura completa (limpiando y escribiendo en el body)
print(encabezado + columns(colIzq, colDer));

// 2. GENERACIÓN INTERACTIVA Y DE EVENTOS (Nodos Reales)

// 🚩 [PLACEHOLDER]: Lógica del botón usando tu función FetchJSON
const btnCargarProlog = button("Consultar Base de Conocimiento", async () => {
    console.log("📍 [PLACEHOLDER: Click detectado. Consumiendo la API...]");
    
    // EJEMPLO de uso a futuro:
    // const data = await fetchJSON('./api/endpoint-prolog.php');
    
    // Mostrando el modal nativo
    document.getElementById("modal-aviso").showModal();
});

// Modal Dialog NATIVO del sistema
const modalBase = dialog("modal-aviso", "Estado de la Consulta", p("La petición ha sido procesada con éxito."));

// 3. INYECCIÓN DE NODOS AL LAYOUT YA IMPRESO
// Buscamos las cajas renderizadas y metemos los botones (Nodos vivos).
document.getElementById('caja-acciones').appendChild(btnCargarProlog);

// El modal lo colocamos al final del body (donde no rompe el flujo visual)
printAsAppend(modalBase);