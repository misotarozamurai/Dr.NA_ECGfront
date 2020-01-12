'use strict'

import WsSock from 'socket'
import {startResultECG} from 'component'
import {createTopDisplay, resetTopDisplay} from 'component/top'
import {removeWrapperChild, removeSpecificChild} from 'element'
import {execPOST} from 'form'

//--------------------------------------------------------------------------
// Control the entire application
//--------------------------------------------------------------------------

// ----- Start a webSocket server connection -----
export const startSocket = url => new WsSock(url);

// ----- Create the top screen -----
export const startTop = () => createTopDisplay();

// ----- Display the result using message data -----
export const startResult = data => {
    resetTopDisplay();
    const pulses = data.pulse;
    const height = data.height;
    startResultECG(pulses, height);
    execPOST(data);
}

// ----- End the analysis and return to the top screen -----
export const endResult = async() => {
    await sleep(3000);
    removeSpecificChild('main', 'result-video');
    removeWrapperChild();
    startTop();
}

// ----- Stop processing temporarily -----
const sleep = msec => {
    return new Promise( resolve => {
       setTimeout( () => {resolve()}, msec);
    });
}