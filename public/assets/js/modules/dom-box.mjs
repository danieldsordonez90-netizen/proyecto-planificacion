/*
 author jose.inestroza@unah.edu.hn, danields.olivares@unah.hn
 version 0.1.0
 date 2026/07/18
 */

export const box = (content = "", backgroundColor = "transparent", id = "") => {
    const idAttr = id ? `id="${id}"` : "";
    return `<div class="box" ${idAttr} style="background-color: ${backgroundColor}; padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px;">
        ${content}
    </div>`;
};