'use strict';

console.log('Запрос данных...'); // синхр код

//promis
// resolve - выплнилось правильно
// reject - не выполнильсь и что-то пошло не так

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve();

    }, 2000);
});

req.then(() => {
    console.log('Данные получены');
});