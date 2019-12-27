'use strict'

//--------------------------------------------------------------------------
// Generate DOM
//--------------------------------------------------------------------------

// ----- Creates the specified element -----
// element = { string => HTML elements }
// choice = { true => id : false => class }
// names = { array[string...] => Attribute value }
// return = Element
export const createElement = (element, choice, names = []) => {
    const _element = document.createElement(element);
    if(choice) {
        _element.id = escapeHtml(names[0]);
        return _element;
    }
    _.forEach(names, name => {
        _element.classList.add(escapeHtml(name));
    });
    return _element;
}


//--------------------------------------------------------------------------
// Performs escaping of attribute values
//--------------------------------------------------------------------------

// ----- Perform HTML escaping -----
// str = { string => The string to escape}
// return = string
export const escapeHtml = str => {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}