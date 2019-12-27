'use strict'

import {startResult} from 'app'

// ----- Analysis start flag -----
export const dataFlaw = {
    _flg: true,
    get flg() {
        return this._flg;
    },
    set flg(flg) {
        this._flg = flg;
    }
}

//--------------------------------------------------------------------------
// Connect to WebSocket server and send and receive data
//--------------------------------------------------------------------------

// ----- webSocket Class -----
export default class WsSock extends WebSocket {
    // url = WebSocket absolute URL
    constructor(wsUrl) {
        super(wsUrl);

        // When a connection is made
        this.onopen = evt => console.log('webSocket open!');

        // If an error occurs
        this.onerror = err => console.error('webSocket onerror ERR: ', err);

        // When a message is received
        this.onmessage = evt => {
            console.log('webSocket onmessage()');
            const message = JSON.parse(evt.data);
            switch(message.type) {
                case 'result':
                    if(dataFlaw.flg) {
                        dataFlaw.flg = dataFlaw.flg = !dataFlaw.flg;
                        startResult(message);
                    }
                    break;
                case 'Animation END':
                    if(!dataFlaw.flg) dataFlaw.flg = !dataFlaw.flg;
                    break;
                default:
                    console.log('Invalid message');
                    break;
            }
        };
    } 
}