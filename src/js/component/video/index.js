'use strict'

import result from 'movie/result'
import {createElement, escapeHtml} from 'element'

//--------------------------------------------------------------------------
// Create background when drawing ECG
//--------------------------------------------------------------------------

// ----- Create a video tag and play the mp4 -----
export const createResultVideo = () => {
    // Creation of video tag and each setting
    const video = createElement('video', true, ['result-video']);
    video.width = window.parent.screen.width;
    video.height = window.parent.screen.height;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    // set mp4 file
    const source = createElement('source', false, ['result']);
    source.src = escapeHtml('dist/' + result);
    source.type = escapeHtml('video/mp4');
    video.appendChild(source);

    // Add as the first child element of the main tag
    const main = document.getElementById('main');
    main.insertBefore(video, main.firstChild);
}