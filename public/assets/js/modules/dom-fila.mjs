/*
* Author: jose.inestroza@unah.edu.hn
* Modified by: Iván, Daniels, Christian
* Version: 0.1.0
*/

const fila = (item = {}) => {
    let el = document.createElement("tr");
    el.innerHTML = `<td>${item.estudiante_cuenta}</td><td>${item.estudiante_name}</td><td>${item.estudiante_email}</td>`;
    return el.outerHTML;
};
export { fila };