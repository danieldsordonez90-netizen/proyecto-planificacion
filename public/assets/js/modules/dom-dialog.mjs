export const dialog = (id, title, htmlContent) => {
    const d = document.createElement("dialog");
    d.id = id;
    d.style.borderRadius = "8px";
    d.style.border = "1px solid #ccc";
    d.style.padding = "20px";
    
    // El "method='dialog'" cierra el modal nativamente sin requerir event listeners extra de JS.
    d.innerHTML = `
        <h3>${title}</h3>
        <div style="margin-bottom: 15px;">${htmlContent}</div>
        <form method="dialog">
            <button>Cerrar</button>
        </form>
    `;
    return d;
};