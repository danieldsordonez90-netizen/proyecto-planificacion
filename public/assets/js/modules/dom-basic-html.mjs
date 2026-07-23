// Utilizamos "Template literals" para retornar HTML puro.
export const tag = (tagName, content = "") => `<${tagName}>${content}</${tagName}>`;

export const h = (level, content) => tag(`h${level}`, content);
export const p = (content) => tag('p', content);
export const b = (content) => tag('b', content);
export const li = (content) => tag('li', content);
export const ul = (content) => tag('ul', content);
export const ol = (content) => tag('ol', content);