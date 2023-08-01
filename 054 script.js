'use strict';

const now = new Date();
// new Date.parse('2023-07-01');

// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);