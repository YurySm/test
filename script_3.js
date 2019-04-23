//callback -функции -- фунциии выполняемые строго по порядку
// function learnJS(lang, callback){
//     console.log("Я учу " + lang);
//     callback();
// }


// learnJS("JS",function(){
//     console.log("Я прошел 3-й урок");
// });

function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}

function done(){
    console.log("Я прошел 3-й урок");
}

learnJS("JS",done);   // done без (), чтобы она выполнилась после

//объекты

// let obj = new Object();

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false; // добавление пары в объект
options.color = {        // объект в объект
    border: "black",
    bg: "red"
};

delete options.bool;  // удаление из объекта

console.log(options);

for (let key in options){ // выводит объект 
    console.log('свойсво ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length); //количество свойств в объекте

//массивы и псевдомассивы

// let arr = ["red", 2, "blue", 4, 5];
// arr.pop();  // удаление последнего эл-та
// arr.push("5"); //добавление посл эл
// arr.shift();  //удаляет первый эл
// arr.unshift("1");  //добавляет первый эл

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// lenght в массивах возвращает не количество 
// эл-тов а последний индекс плюс 1

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')' );
// });

// console.log(arr);
// let mass =[1, 2, 4, 6, 8, 9];
// for (let key in mass){  //in получаем ключи
//     console.log(key);
// }
// for (let key of mass){  //of получаем значение
//     console.log(key);
// }
// let ans = prompt("", ""),
//     arr_1 = [];

// arr_1 = ans.split(',');  // split - преобразует строку в массив через разделитель
// console.log(arr_1);
// let arr = ['qqq', 'asd', 'zxc'];
//     i = arr.join(', ');         // массив в строку
// console.log(i);
// let arr = ['qqq', 'asd', 'zxc'];
//     i = arr.sort();         // по алфавиту
// console.log(arr);
let arr = [1, 15, 4, 3];       // чтобы sort правильно сортировал цифры
    i = arr.sort(compareNum);
function compareNum(a, b){
    return a-b;
}
console.log(arr);
