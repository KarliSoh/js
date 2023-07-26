// Тема про сборщики мусоров

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function () {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);


// function outer() {
//     const potentionHugeArray = [];
//     return function inner() {
//         potentionHugeArray.push('Hello');
//         console.log('Hello!!');
//     };
// }

// const sayHello = outer();


function crateElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(crateElement);
}

crateElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();