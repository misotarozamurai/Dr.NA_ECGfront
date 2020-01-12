'use strict'

import {startResult, endResult} from 'app'
import {createConsoleText} from 'component/console'

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
                // Start analysis
                case 'result':
                    if(dataFlaw.flg) {
                        dataFlaw.flg = !dataFlaw.flg;
                        startResult(message);
                    }
                    break;
                // Display the message being analyzed
                case 'message':
                    this.consoleDisplay(message.message);
                    break;
                // End of analysis
                case 'Animation END':
                    if(!dataFlaw.flg) dataFlaw.flg = !dataFlaw.flg;
                    (async() => {
                        this.consoleDisplay(message.message);
                        await endResult();
                    })();
                    break;
                default:
                    console.log('Invalid message');
                    break;
            }
        };
    } 

    // ----- Display message in console element -----
    consoleDisplay(message) {
        createConsoleText(message);
    }
}