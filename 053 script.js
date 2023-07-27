"use strict";

// let user = {
//     name: 'Ivan'
// };

// let map = new Map();
// let map = new WeakMap(); // слабая карта
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));

let cache = new WeakMap();

function cacherUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user); // получаем с пом get
}

let lena = {
    name: 'Elena'
};
let Alex = {
    name: 'Alex'
};

cacherUser(lena);
cacherUser(Alex);


lena = null;

console.log(cache.has(lena));
console.log(cache.has(Alex));

// WeakSet
// add, has, delete

let massages = [{
        text: 'Hello',
        form: 'John'
    },
    {
        text: 'World',
        form: 'Kitty'
    },
    {
        text: 'People',
        form: 'Ride'
    }
];

let redMassages = new WeakSet();

redMassages.add(massages[0]);
// redMassages.add(massages[1]);

redMassages.add(massages[0]);
massages.shift();
console.log(redMassages.has(massages[0]));