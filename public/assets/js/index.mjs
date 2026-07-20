/*
* Author: jose.inestroza@unah.edu.hn
* Modified by: Iván, Daniels, Christian
* Version: 0.1.0
*/

/*
se corrio en direccion http://localhost:8000/spa1/index.html
*/ 

import { fila } from './modules/dom-fila.mjs';

const cargarDatos = async () => {
    const res = await fetch('/api/estudiantes.php'); 
    const datos = await res.json();
    const filas = datos.map(fila).join("");
    document.getElementById('tabla-body').innerHTML = filas;
};

cargarDatos();