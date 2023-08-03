'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

User.prototype.exit = function () { // доб объекты к констр
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 20);
const alex = new User('Alex', 23);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);