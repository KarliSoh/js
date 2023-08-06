'use strict';

const person = {
    name: 'Alex',
    tel: '+37529885144',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';

// console.log(JSON.parse(JSON.stringify(person)));

console.log(person);
console.log(clone);