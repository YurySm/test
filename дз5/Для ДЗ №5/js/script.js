'use script'
let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById("title"),
    menuItemLi = document.createElement('li'),
    adv = document.querySelector('.adv'),
    promptUser = document.getElementById('prompt');


menu.insertBefore(menuItem[2], menuItem[1]);  //поставил на место 
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);  //добавил 5й эл-т

title.textContent = "Мы продаем только подлинную технику Apple"; //заголовок

adv.remove(); //реклама

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; //фон

let userAnswer = prompt('Как Вы относитесь к технике Apple?');
promptUser.textContent = userAnswer;    //ответ пользователя


//ответ на вопрос
// мы получаем отбор по всем селекторам помещенные в массив










