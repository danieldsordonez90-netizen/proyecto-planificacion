/*
 author https://developer.mozilla.org/en-US/, danields.olivares@unah.hn
 version 0.1.0
 date 2026/07/20
 */

import { fetchJSON } from './dom-fetch.mjs';
import { button } from './dom-events.mjs';

const inyectarEstilosTema = () => {
    const estilo = document.createElement('style');
    estilo.textContent = `
        #bg-blue {
            position: relative;
        }
        .btn-tema {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            padding: 8px 14px;
            border-radius: 4px;
            border: 1px solid #ffffff;
            background-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            font-weight: bold;
            font-size: 13px;
        }
        .btn-tema:hover {
            background-color: rgba(255, 255, 255, 0.35);
        }
        body.dark-theme {
            background-color: #121212;
            color: #e0e0e0;
        }
        body.dark-theme #bg-blue {
            background-color: #1f4b6b !important;
        }
        body.dark-theme #caja-acciones {
            background-color: #4a2424 !important;
        }
        body.dark-theme #caja-resultados {
            background-color: #1e3812 !important;
        }
        body.dark-theme #caja-opciones {
            background-color: #1a434e !important;
        }
        body.dark-theme .btn-tema {
            background-color: #2b2b2b;
            color: #ffffff;
            border-color: #666666;
        }
        body.dark-theme button:not(.btn-tema) {
            background-color: #333333;
            color: #ffffff;
            border: 1px solid #555555;
        }
        body.dark-theme .box, 
        body.dark-theme .card, 
        body.dark-theme dialog {
            background-color: #4e6615 !important;
            border-color: #333333 !important;
            color: #e0e0e0 !important;
        }
    `;
    document.head.appendChild(estilo);
};

const alternarClaseTema = (tema) => {
    if (tema === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
};

const obtenerTemaBackend = async () => {
    const data = await fetchJSON('/api/preferencias.php?action=get');
    return data && data.theme ? data.theme : 'light';
};

const guardarTemaBackend = async (tema) => {
    await fetchJSON(`/api/preferencias.php?action=save&theme=${tema}`);
};

export const initTheme = async () => {
    inyectarEstilosTema();
    const temaActual = await obtenerTemaBackend();
    alternarClaseTema(temaActual);
};

export const themeToggleButton = () => {
    const btn = button("Cambiar Tema", async () => {
        const esOscuro = document.body.classList.contains('dark-theme');
        const nuevoTema = esOscuro ? 'light' : 'dark';
        
        alternarClaseTema(nuevoTema);
        await guardarTemaBackend(nuevoTema);
    });
    btn.classList.add('btn-tema');
    return btn;
};