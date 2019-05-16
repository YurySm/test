let btn = document.getElementsByTagName('button'),
    wrap = document.querySelector('wrapper');

// btn[0].onclick = function(){          // только один onclick на кнопку
//     alert('вы нажали первую кнопку');
// };

// несколько действий на кнопку
btn[0].addEventListener('click', function(event){  // event -- при нажатии
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
    console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
    
});
wrap.addEventListener('click', function(event){
    console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
});








// btn[0].addEventListener('click', function(){
    
//     alert('вы опять нажали первую кнопку');
// });
// btn[0].addEventListener('mouseenter', function(){
//     alert('вы навели на первую кнопку');
// });
