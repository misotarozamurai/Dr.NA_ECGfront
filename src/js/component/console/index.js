'use strict'

import {createElement} from 'element'

//--------------------------------------------------------------------------
// Receive pulse data and create ECG
//--------------------------------------------------------------------------

// ----- Creating a console screen -----
export const creataConsoleDisplay = () => {
    // Create elements for console screen
    const console_box = createElement('div', true, ['console-box']);
    const main = document.getElementById('main');
    console_box.width = main.clientWidth / 2.7;
    console_box.height = main.clientHeight / 5.9;

    // Dummy data
    const text = createElement('p', false, ['console_text']);
    text.textContent = 'console.log(hoge)';
    console_box.appendChild(text);

    const main_wrpper = document.getElementById('wrapper');
    main_wrpper.appendChild(console_box);
}