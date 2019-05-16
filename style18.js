let box = document.getElementById('box'), //<div class="box" id="box"></div>
    btn = document.getElementsByTagName('button'), //массив с тегами button
    circle = document.getElementsByClassName('circle'), // все эл-ты с классом circle
    heart = document.querySelectorAll('.heart'), //отбор по всем селекторам
    oneHeart = document.querySelector('.heart'), // первый такой элемент на стронице
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(oneHeart);

 // задаем CSS свойства
box.style.backgroundColor = 'blue'; 
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }
// heart.forEach(function(item, i, hearts){ //(номер эт-та, переменная, этот массив любым другим именем)
//     item.style.backgroundColor = 'blue';
// });
let div = document.createElement('div'),     // создаем новый элемент в index.html
    text = document.createTextNode('Я тут был...');

div.classList.add('black'); // добавляем class = "black"

// div.innerHTML = '<h1>Hello World!</h1>';  // вставляем текст в элемент
div.textContent = 'Hello World!'; // только текст





// document.body.appendChild(div); // добвляем элемент в index.html в конец
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]); //(что вставляем, перед чем вствляем)
// без втрого эл-та станет в начало страницы
document.body.removeChild(circle[1]); // удаляем эл-т
wrapper.removeChild(heart[1]);  //относительно родителя 

document.body.replaceChild(btn[1], circle[1]); //замена (новый, старый)


console.log(div);
