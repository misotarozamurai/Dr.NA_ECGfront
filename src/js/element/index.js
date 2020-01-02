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


//--------------------------------------------------------------------------
// Delete child element of parent element
//--------------------------------------------------------------------------
const divWrapper = document.getElementById('wrapper');
// ----- Change the style of wrapper and prepare for drawing animation -----
export const wrapperStyleToggle = (names = []) => {
    _.forEach(names, name => {
        divWrapper.classList.toggle(name);
    });
}

// ----- Delete all child elements -----
export const removeWrapperChild = () => {
    while(divWrapper.firstChild) {
        divWrapper.removeChild(divWrapper.firstChild);
    }
}

// ----- Delete the child element of the parent element specified by ID -----
export const removeSpecificChild = (parent, child) => {
    const _parent = document.getElementById(parent);
    const _child = document.getElementById(child);
    _parent.removeChild(_child);
}