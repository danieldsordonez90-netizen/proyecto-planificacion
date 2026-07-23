export const box = (content = "", backgroundColor = "transparent", id = "") => {
    const idAttr = id ? `id="${id}"` : "";
    return `<div ${idAttr} style="background-color: ${backgroundColor}; padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px;">
        ${content}
    </div>`;
};