"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Not!');
}



// if (num < 49) {
//     console.log('Erroe');
// } else if (num > 100) {
//     console.log('Error 2');
// } else {
//     console.log('Ok!');
// }


// (num === 50) ? console.log('Ok!'): console.log('Erroe');




// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('More');
// } else {
//     console.log('Ok!');
// }

// С помощью тернарного оператора
// (num === 50) ? console.log('Ok!'): console.log('Error!');


const num = 100;

switch (num) {
    case 49:
        console.log('Error!');
        break;
    case 100:
        console.log('Oh, no');
        break;
    default:
        console.log('Ok!');
        break;

}



// Логические операторы

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("I'm full!");
// }



// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries); // вернет 0

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'hgvshdbcxj');


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Everyone is full!");
// } else {
//     console.log('Were leaving!');
// }




const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Everyone is full!");
} else {
    console.log('Were leaving!');
}

console.log(hamburger === 3 && cola === 2);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);



console.log(!0);



// Циклы 

let num1 = 50;

// while (num1 <= 55) {
//     console.log(num1);
//     num1++;
// }

// do {
//     console.log(num1);
//     num1++;
// }
// while (num1 < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue; //пропускает шаг, но не прерывает цикл.
    }
    console.log(i);

}