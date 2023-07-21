'use strict';

const arr = ['Alex', 'Anna', 'Alex', 'Nick'];


function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')
//     .add('Anna');

// console.log(set); // выводит без повторений

// set.delete(value);
// set.has(value); //проверяем массив на наличие значения
// set.clear();
// set.size;

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());