import { h, p, b, li, ul, ol, tag } from './dom-basic-html.mjs';
import { box } from './dom-box.mjs';
import { columns } from './dom-columns.mjs';
import { button, buttonDemoMessage } from './dom-events.mjs';
import { dialog } from './dom-dialog.mjs';
import { fetchJSON } from './dom-fetch.mjs';

let rootElement = null;

const init = (selector) => {
    rootElement = document.querySelector(selector);
};

const print = (content) => {
    if (!rootElement) return;
    if (typeof content === "string") {
        rootElement.innerHTML = content;
    } else {
        rootElement.innerHTML = "";
        rootElement.appendChild(content); 
    }
};

const printAsAppend = (content) => {
    if (!rootElement) return;
    if (typeof content === "string") {
        rootElement.insertAdjacentHTML('beforeend', content);
    } else {
        rootElement.appendChild(content);
    }
};

// Barrel Export
export {
    init, print, printAsAppend,
    h, p, b, li, ul, ol, tag,
    box, columns,
    button, buttonDemoMessage,
    dialog, fetchJSON
};