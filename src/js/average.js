"use strict";
export function average(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length === 0) return 0;
    if (!array.every(element => typeof element === 'number')) return 0;
    if (!array.every(element => element >= 0)) return 0;
    
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }

    return Math.round(sum / array.length);
}