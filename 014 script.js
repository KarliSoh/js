"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
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

switch (num) {
    case 49:
        console.log('No!');
        break;
    case 100:
        console.log('No2!');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:
        console.log('Oh? no!');
        break;

}