'use strict'

import {createElement, escapeHtml, removeWrapperChild} from 'element'
import dna_top1 from 'dna_top1'
import dna_top2 from 'dna_top2'
import dna_top3 from 'dna_top3'
import dna_top4 from 'dna_top4'
import dna_top5 from 'dna_top5'
import dna_top6 from 'dna_top6'
import logo from 'logo'
// import title from 'title'

const images = {
    0: dna_top1,
    1: dna_top2,
    2: dna_top3,
    3: dna_top4,
    4: dna_top5,
    5: dna_top6,
}

//--------------------------------------------------------------------------
// Create a TOP screen
//--------------------------------------------------------------------------

// ----- Generate a logo image by adding a background image -----
export const createTopDisplay = () => {
    const random = Math.floor(Math.random() * 6);
    const wrapper = document.getElementById('wrapper');
    wrapper.style.backgroundImage = 'url(dist/' + images[random] + ')';
    wrapper.classList.add('wrapper_bg');

    wrapper.appendChild(createLogo());
}

// ----- Create a logo image -----
const createLogo = () => {
    const _wrapper = createElement('div', true, ['logo-warpper']);

    // Generating a logo image
    const _logo = createElement('img', false, ['logo_img']);
    _logo.src = escapeHtml('dist/' + logo);
    _logo.alt = escapeHtml('ロゴ画像');
    _logo.width = 700;
    _logo.height = 700;

    // Generating a title image
    const _title = createElement('img', false, ['logo_title']);
    _title.src = escapeHtml('dist/img/title.png');
    _title.alt = escapeHtml('タイトル画像');
    _title.width = 700;
    _title.height = 150;

    _wrapper.appendChild(_logo);
    _wrapper.appendChild(_title);
    return _wrapper;
}

//--------------------------------------------------------------------------
// Delete a TOP screen
//--------------------------------------------------------------------------

// ----- Delete the background image and delete the logo image -----
export const resetTopDisplay = () => {
    const wrapper = document.getElementById('wrapper');
    wrapper.style.backgroundImage = 'none';
    wrapper.classList.remove('wrapper_bg');
    removeWrapperChild();
}