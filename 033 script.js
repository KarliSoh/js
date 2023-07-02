"use strict";

// let number = 5;
// debugger

// function logNumber() {
//     console.log(number) debugger;
// }

// number = 6;

// logNumber();
// debugger

// number = 8;

// logNumber();
// debugger

function greateCounter() {
    let counter = 0;

    const myFunc = function () {
        counter = counter + 1;
        return counter;
    };

    return myFunc;
}

const increment = greateCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);