export const button = (text = "Botón", action = () => {}) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", action);
    btn.style.margin = "5px";
    btn.style.padding = "8px 16px";
    return btn;
};

export const buttonDemoMessage = (text = "Send", message = "", action = () => {}) => {
    const element = document.createElement("button");
    element.textContent = text;
    // Utilizamos data attributes para guardar metadata en el nodo
    element.dataset.message = message;
    element.addEventListener("click", action);
    return element;
};