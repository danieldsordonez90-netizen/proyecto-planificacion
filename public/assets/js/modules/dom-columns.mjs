/*
 author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 version 0.1.0
 date 2026/07/18
 */

export const columns = (leftContentStr = "", rightContentStr = "") => {
    return `
        <div style="display: flex; gap: 20px; width: 100%;">
            <div style="flex: 1; min-width: 0;">${leftContentStr}</div>
            <div style="flex: 1; min-width: 0;">${rightContentStr}</div>
        </div>
    `;
};