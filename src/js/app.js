'use strict'

import WsSock from 'socket'
import {startResultECG} from 'component'

// ----- Start a webSocket server connection -----
export const startSocket = url => new WsSock(url);

// ----- Display the result using message data -----
export const startResult = data => {
    const pulses = data.pulse;
    const height = data.height;
    startResultECG(pulses, height);
}