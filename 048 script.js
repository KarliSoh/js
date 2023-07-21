'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPubData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user)); // создаем из объекта массив с массивами
console.log(userMap);

const newUserObject = Object.fromEntries(userMap); // из массива подобного создает объект
console.log(newUserObject);

const shops = [{
        rice: 500
    },
    {
        oil: 200
    },
    {
        bread: 100
    }
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{
        paper: 400
    }, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 6000);


console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key); // удаляет
// map.clear(); // полностью очищает
// map.size; // св-во кол-во элемен на дан момент в карте
// map.keys();
// console.log(map.keys());


// const goods = [];
// for (let shop of map.keys()) {
//     console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });