/*
 author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 version 0.1.3
 date 2026/07/24
 */

import { h, p } from './dom-basic-html.mjs';
import { box } from './dom-box.mjs';
import { dialog } from './dom-dialog.mjs';
import { button } from './dom-events.mjs';
import { fetchJSON } from './dom-fetch.mjs';

const renderChart = (data) => {
    const stats = Array.isArray(data) ? (data[0] || {}) : (data || {});
    
    const s = parseInt(stats.sobresaliente, 10) || 0;
    const r = parseInt(stats.regular, 10) || 0;
    const b = parseInt(stats.bajo, 10) || 0;
    
    const total = s + r + b;

    const bands = [
        { value: s, color: '#4caf50', label: 'Sobresaliente (80-100%)' },
        { value: r, color: '#ffc107', label: 'Regular (65-79%)' }, 
        { value: b, color: '#f44336', label: 'Bajo (0-65%)' }
    ];

    const barsHTML = bands.map(band => {
        const percent = total > 0 ? ((band.value / total) * 100).toFixed(1) : 0;
        
        return `
        <div style="display: flex; align-items: center; margin-bottom: 12px; font-family: sans-serif; font-size: 14px;">
            <div style="width: 170px; font-weight: 500; color: #333;">${band.label}</div>
            
            <div style="flex-grow: 1; background-color: #e0e0e0; height: 20px; border-radius: 3px; margin: 0 15px; overflow: hidden;">
                <div style="width: ${percent}%; background-color: ${band.color}; height: 100%; transition: width 0.5s ease;"></div>
            </div>
            
            <div style="width: 120px; text-align: right; color: #555;">
                <strong>${band.value}</strong> alumnos (${percent}%)
            </div>
        </div>`;
    }).join('');

    return box(`<div style="padding: 10px; min-width: 450px;">${barsHTML}</div>`);
};

const renderCounters = (data) => {
    const counters = Array.isArray(data) ? (data[0] || {}) : (data || {});

    const alumnos = counters.total_alumnos ?? counters.alumnos ?? 0;
    const profesores = counters.total_profesores ?? counters.profesores ?? 0;
    const asignaturas = counters.total_asignaturas ?? counters.total_materias ?? counters.asignaturas ?? counters.materias ?? 0;
    const secciones = counters.total_secciones ?? counters.secciones ?? 0;
    
    return box(
        h(3, 'Contadores Globales') +
        p(`Alumnos matriculados: ${alumnos}`) +
        p(`Profesores asignados: ${profesores}`) +
        p(`Asignaturas: ${asignaturas}`) +
        p(`Secciones creadas: ${secciones}`)
    );
};

export const buildStatsDialog = async () => {
    const countersData = await fetchJSON('./api/getGlobalCounters.php');
    const gradesData = await fetchJSON('./api/estadisticas-notas.php');

    const content = 
        renderCounters(countersData) + 
        h(3, 'Distribución de Promedio de Notas') + 
        renderChart(gradesData);
        
    return dialog('stats-modal', 'Estadísticas del Sistema', content);
};

export const statsButton = (label = 'Ver Estadísticas') => button(label, () => {
    const modal = document.getElementById('stats-modal');
    if (modal) modal.showModal();
});