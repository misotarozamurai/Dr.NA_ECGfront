'use strict'

import {SmoothieChart, TimeSeries} from 'smoothie'
import {escapeHtml} from 'element'

//--------------------------------------------------------------------------
// Receive pulse data and create ECG
//--------------------------------------------------------------------------
let aryPulse = null;
let aryIndex = 0;
export const ecgDrawing = pluse => {
    // Shape pulse data to draw
    aryPulse = formattingPulse(pluse);

    // Find the canvas
    const canvas = document.getElementById('pulse-canvas');
    // Create a time series
    const series = new TimeSeries();
    // Create the charts
    const chart = new SmoothieChart({labels:{fontSize:20}});
    chart.addTimeSeries(series, { strokeStyle: 'rgba(0, 255, 0, 1)' });
    chart.streamTo(canvas, 500);

    // Start ECG drawing
    startSmoothie(series);
}

// ----- Continue to draw ECG -----
const startSmoothie = series => {
    const speed = 600;  // Drawing speed
    let data = 0;       // Drawing data
    let random = 0;     // Drawing data
    // Acquire elements for numerical output of pulse
    const pulse = document.getElementById('pulse-data');

    // I will draw pulse data
    setInterval( ()=> {
        data = returnPulse();
        random = Math.floor( Math.random() * 10);
        series.append(Date.now(), data);

        // Display data numerically when it is not an intermediate value
        if(aryIndex % 2 === 1)  pulse.textContent = escapeHtml(data + '.' + random);
    }, speed);

    // ----- Returns the numerical value of the ECG data ----
    const returnPulse = () => aryPulse[receiveData()];

    // ----- Repeat ECG data -----
    const receiveData = () => {
        if(aryIndex + 1 < aryPulse.length) {
            aryIndex++;
            return aryIndex;
        } 
        aryIndex = 0;
        return aryIndex;
    }
}

// ----- Shape and return pulse data -----
const formattingPulse = pulse => {
    const max = Math.max.apply(null, pulse);
    const min = Math.min.apply(null, pulse);
    const interme = IntermediateValue(max, min);

    // Format data in array
    const shaping = [interme];
    _.forEach(pulse, data => {
        shaping.push(data);
        shaping.push(interme);
    });
    return shaping;
}

// ----- Find intermediate value between maximum and minimum -----
const IntermediateValue = (max, min) => ((max - min) / 2) + min;