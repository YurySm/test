
if(2*4 == 9){                       //если
    console.log("Верно!");
}else{
    console.log("Не верно!");
}
let num = 50;
if(num < 49){
    console.log("Неверно")
}else if(num > 100){
    console.log("много")
}else{
    console.log("Верно")
}

(num = 50) ? console.log("Верно") : console.log("Неверно"); 

switch(num){
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("много");
        break;
    case num > 80:
        console.log("все еще много");
        break;
    case 50:                     // num == 50
        console.log("Верно");
        break;
    default:
        console.log("что-то пошло не так");
        break;
}

//циклы

// while(num < 55){
//     console.log(num);
//     num++;
// }
// do{
//     console.log(num);
//     num++;
// }
// while(num < 55)

// for (let i = 1; i < 8; i++){
//     if (i == 6){      //пропустит i == 6
//         continue
//     }
//     console.log(i)
// }


// Функции
// function showFirstMassage(text){
//     alert(text);
//     let num = 20;
//     console.log(num);
// }

// showFirstMassage("Hello World!");
// console.log(num);  //Uncaught ReferenceError: numb is not defined

// let calc = function (a, b){
//     return (a+b);                     // останавливает функцию, возв результат
// }
// console.log(calc(3,4));
// console.log(calc(6,4));

function retVar(){
    let num = 100;
    return num;                        // делает переменную глобальной
}

let anotherNum = retVar();
console.log(anotherNum);

//ES6
let calc = (a, b) => a + b;     // стрелочная функция
console.log(calc(3,4));
console.log(calc(6,4));

let str = "test";
console.log(str.length);        // длинна строки
console.log(str.toUpperCase());   // все заглавными
console.log(str.toLowerCase());   //все низкими

let twelve = "12.2px";
// console.log(Math.round(twelve));  // округление до целого числа
console.log(parseInt(twelve));     //округлил 
console.log(parseFloat(twelve));   // возв десятичное число