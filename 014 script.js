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


const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('More');
} else {
    console.log('Ok!');
}

// С помощью тернарного оператора
(num === 50) ? console.log('Ok!'): console.log('Error!');