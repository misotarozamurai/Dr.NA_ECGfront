'use strict'

//--------------------------------------------------------------------------
// POST data
//--------------------------------------------------------------------------
// @param String URL
// @param Object POST data associative array
export const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(response => response.json());
}