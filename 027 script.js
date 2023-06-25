"use strict";

const arr = [13, 2, 3, 1, 8];
// arr.sort(); // сортирует по первому числу
arr.sort(compareNUm);
console.log(arr);

function compareNUm(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length); // последний объект + 1
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt('', '');
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));