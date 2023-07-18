'use strict';
const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    showMyPubData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'birthday', {
//     value: prompt('Date?'),
//     enumerable: true,
//     configurable: true
// });
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPubData', {
    enumerable: false
});

for (let key in user) {
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {
        writable: false
    },
    surname: {
        writable: false
    }
});



// Object.defineProperty(user, 'name', {
//     writable: false
// });

// Object.defineProperty(user, 'gender', {
//     value: 'male'
// });
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = 'jhvfd'; // не можем изменять, потому что стоит false 

// Флаги:
// writable - есль true, то можно изменить, но если false, то только для чтения
// enumerable - если true, то свойство будет перечесляться в циклах, если false, то циклы будут его игнорировать
// configurable - если true, то можно удалить и изменить атрибуты, а если false, то изменит и удалить - нельзя