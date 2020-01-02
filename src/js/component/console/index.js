'use strict'

import {createElement, escapeHtml} from 'element'

//--------------------------------------------------------------------------
// Create a console
//--------------------------------------------------------------------------

// ----- Creating a console screen -----
export const creataConsoleDisplay = () => {
    // Create elements for console screen
    const console_box = createElement('div', true, ['console-box']);
    const main = document.getElementById('main');
    console_box.width = main.clientWidth / 2.7;
    console_box.height = main.clientHeight / 5.9;

    const main_wrpper = document.getElementById('wrapper');
    main_wrpper.appendChild(console_box);

    // Initial data
    createConsoleText('Sensor send data to client.');
}

// ----- Create console text -----
export const createConsoleText = text => {
    const _text = createElement('p', false, ['console_text']);
    _text.textContent = escapeHtml(text);
    const console_box = document.getElementById('console-box');
    console_box.appendChild(_text);
    if(console_box.childElementCount === 9) {
        console_box.removeChild(console_box.firstChild);
    }
}