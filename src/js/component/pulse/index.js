'use strict'

import {createElement, escapeHtml} from 'element'
import {ecgDrawing} from 'component/pulse/ecg'
import resultDNA from 'resultDNA'

//--------------------------------------------------------------------------
// Receive pulse data in an array and create an ECG
//--------------------------------------------------------------------------
// ----- Create a display element and draw an ECG -----
export const createECG = pulse => {
    // Creating an element
    const wrpper = createElement('div', true, ['pulse-wrapper']);
    // ECG drawing element
    const canvas = createElement('canvas', true, ['pulse-canvas']);
    const main = document.getElementById('main');
    canvas.width = main.clientWidth / 2.6;
    canvas.height = main.clientHeight / 6.5;

    // Formatting entire elements
    wrpper.appendChild(canvas);
    const main_wrpper = document.getElementById('wrapper');
    main_wrpper.appendChild(wrpper);

    // Draw an electrocardiogram
    ecgDrawing(pulse);
}

//--------------------------------------------------------------------------
// Receives the average and height and draws the data box
//--------------------------------------------------------------------------

// ----- Create a data box and draw -----
export const createDataBox = (avg, height) => {
    // Create parent element
    const wrpper = createElement('div', true, ['data-wrapper']);

    // Creating image elements
    const img = createImg();
    wrpper.appendChild(img);

    // Create data element
    const elements = creataData(avg, height);
    _.forEach(elements, (value, key) => {
        wrpper.appendChild(value);
    });

    const main_wrpper = document.getElementById('wrapper');
    main_wrpper.appendChild(wrpper);
}

// ----- Creates and returns an image element -----
const createImg = () => {
    const img = createElement('img', false, ['data_image']);
    img.src = escapeHtml('dist/' + resultDNA);
    img.alt = escapeHtml('DNA画像');
    return img;
}

// ----- Create height, pulse and AVG data elements and return them as objects -----
const creataData = (avg, height) => {
    // Creating a height element
    const _height = createElement('p', false, ['height']);
    _height.textContent = height;
    // Creating pulse elements and creating icons
    const _pulse = createElement('p', false, ['pulse']);
    const item = createElement('span', false, ['item']);
    const heart = createElement('i', false, ['heart', 'fas', 'fa-heart']);
    const pulse_data = createElement('span', true, ['pulse-data']);

    // Creating AVG elements
    const _avg = createElement('p', false, ['avg']);
    _avg.textContent = avg;

    // Formatting AVG elements
    item.appendChild(heart);
    _pulse.insertBefore(item, _pulse.firstChild);
    _pulse.appendChild(pulse_data);

    // Object containing the element
    return {
        height: _height,
        pulse: _pulse,
        avg: _avg
    }
}