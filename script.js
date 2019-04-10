'use script';   // стандарт ES6


console.log(leftBorderWidth);
var leftBorderWidth = 1;     // обозначение переменной исп-ся везде в коде
let second = 2;              // обозначение переменной появляется только после объявления   {}
const pi = 3.14;             // константа, не изменяется

// типы данных
var number = 3;           
var string = "Hello";
var sym = Symbol();       
var boolean = true;
null;                        //не существует
undefined;                  // объект есть значения нет
var obj = {};                // объект, комплексный

console.log(4/0);
//console.log('string' * 9);
//console.log(som);
let somet;
console.log(somet);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone.name);
console.log(persone["name"]);

//массив, начинается с 0
let arr = ['plam.png', 'orange.jpg', 'apple.png'];
console.log(arr[2]);

//alert("hello world");     //выводит пользователю, модальное окно
//let answer = confirm("are you here?");   //модальное окно с ответами да или нет
//console.log(answer);

//let answer = prompt("есть ли вам 18 лет?", "Да" );    //модальное окно с полем ввода ответа
//console.log(typeof(answer));                          //typeof(answer) возвращает тип данных

//операторы
//console.log("arr" + " - objekt");
//console.log( 4 + " - objekt");
//let answer = +prompt("есть ли вам 18 лет?", "Да" );     // +prompt -возвращает число
//console.log(typeof(answer));      
//console.log( 4 + +" - objekt");                           //+ перед строкой возвращает число

let incr = 10,
    decr = 10;
//incr++;             //11
//decr--;             //9
//console.log(++incr);  //11
//console.log(--decr);  //9

console.log(incr++);  //10 после - сразу выводит потом изменяет
console.log(decr--);  //10

console.log(5%2);    //остаток от деления

// = присвоение
// == проперка на равенство
// === строгая проверка по типам

console.log("2" == 2);  //true
console.log( "2" === 2); //folse
// && - и, || - или, ! - не(!isClose)
let isChecked = true,
    isClose = false;
console.log(isChecked && isClose);  //false
console.log(isChecked || isClose);  // true

//git githab
