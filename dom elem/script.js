'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div); // встаувляет в конец родителя

// wrapper.prepend(div); // вставляет элемент в начало родителя
// wrapper.appendChild(div); // старая запись

// hearts[0].before(div); //до 1 сердечка

// wrapper.insertBefore(div, hearts[0]); // старая запись

// hearts[0].after(div); // после 1 сердечка

// circles[0].remove(); // удалили первый кружочек

// wrapper.removeChild(hearts[1]); // старая запись

// hearts[0].replaceWith(circles[0]); // заменяем один элемент другим

// wrapper.replaceChild(circles[0], hearts[0]); //старая запись

div.innerHTML = "<h1>Hello Worls</h1>";

// div.textContent = "<h1>Hello Worls</h1>";

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');