import { init, print, printAsAppend, h, p, box, fetchJSON, button, initTheme, themeToggleButton } from '../assets/js/modules/dom.mjs';

init('body');
initTheme();

const encabezado = box(
    `<a href="../index.html" style="color:#ffffff; font-size:13px;">Volver al panel principal</a>` +
    h(1, "Planificaciones Academicas"),
    "#3887c0",
    "bg-blue"
);

print(encabezado + `<div id="contenedor-planes"></div>`);

async function cargarPlanes() {
    const contenedor = document.getElementById("contenedor-planes");
    contenedor.innerHTML = p("Generando 4 horarios optimos");

    const [planes, secciones] = await Promise.all([
        fetchJSON('../api/horarios.php'),
        fetchJSON('../api/secciones.php')
    ]);

    if (!planes || planes.length === 0) {
        contenedor.innerHTML = p("No se pudieron generar planes. Verifique el modelo de datos.");
        return;
    }

    const mapaSecciones = {};
    secciones.forEach(s => { mapaSecciones[s.codigo] = s; });

    let html = "";
    planes.forEach(plan => {
        let filas = "";
        plan.secciones.forEach(codigo => {
            const detalle = mapaSecciones[codigo];
            if (detalle) {
                filas += `<li>${detalle.codigoMateria} — Hora: ${detalle.hora} — Docente: ${detalle.docente} — Aula: ${detalle.aula}</li>`;
            } else {
                filas += `<li>${codigo}</li>`;
            }
        });
        html += box(h(2, "Plan " + plan.plan) + `<ul>${filas}</ul>`, "#e6ffcf");
    });

    contenedor.innerHTML = html;
}

cargarPlanes();

printAsAppend(themeToggleButton());