"use sctrict";

let str = 'some';
let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier); // когда у этой перемен нет никаких данных


// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; //  Устаревший метод

// Object.setPrototypeOf(jonh, soldier); //нов запись, когда имеет какие-то данные


// console.log(jonh.armor);
jonh.sayHello();