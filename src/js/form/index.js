'use strict'

import {postData} from 'form/post'
import {createConsoleText} from 'component/console'

export const execPOST = data => {
    const _action = 'http://localhost:8085/api/v1/';
    const _data = dataFormat(data);
    postData(_action, _data)
        .then(data => {
            const res = JSON.stringify(data);
            console.log(res);
            if(res) createConsoleText('data POST to API.');
        })
        .catch(err => console.error(err));
}

// ----- Format as associative array -----
const dataFormat = data => {
    const _data = {
        avg: data.pulse.avg,
        height: data.height,
        name: data.sick.name,
        message: data.sick.message
    }
    return _data;
}