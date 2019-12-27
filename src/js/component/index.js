'use strict'

import {createECG, createDataBox} from 'component/pulse'
import {createResultVideo} from 'component/video'
import {creataConsoleDisplay} from 'component/console'

//--------------------------------------------------------------------------
// Controls the component
//--------------------------------------------------------------------------

// ----- Displays results from pulse and height -----
export const startResultECG = (pulse, height) => {
    // Drawing background videos
    createResultVideo();
    // Drawing the console screen
    creataConsoleDisplay();
    // Drawing of analysis data (height, pulse, AVG)
    createDataBox(pulse.avg, height);
    // ECG drawing
    createECG(pulse.datas);
}