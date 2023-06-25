"use strict";

const str = 'test';
const str1 = 'teSt';
const arr = [1, 2, 4];


// console.log(str[2] = 'd'); //d

console.log(str.toUpperCase()); //TEST
console.log(str1.toLocaleLowerCase()); //test
console.log(str); // 1, 2, 4

const fruit = 'Some fruit';


console.log(fruit.indexOf('fruit'));


const logg = 'Hello world';

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test)); //12

console.log(parseFloat(test)); //12.2