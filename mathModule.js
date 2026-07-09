export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}


import { toUpperCase } from './stringModule.js';

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

import { findMax } from './arrayModule.js';

export function multiAndLogUpper(arr = []) {
    const n = findMax(arr);
    const m = multiply(n, 2);
    console.log(toUpperCase(m.toString()));
}