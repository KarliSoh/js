'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 10,
//     b: 45,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();

//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let ivan = new User('Ivan', 20);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const doubl = count.bind(2);
// console.log(doubl(3));
// console.log(doubl(13));


// 1) Обычная фун-ция = window, но если use strict = undefined
// 2) Контекст у методов объекта - сам объект
// 3) this  в конструктарах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     // console.log(this);
//     this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));