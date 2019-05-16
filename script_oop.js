let soldier = {
    health: 400,
    armor: 100
};
let john ={
    health: 100
};
john.__proto__ = soldier;

console.log(john);
console.log(john.armor); // 100 от прототипа

//динамическая типизация -- изменение типа данных

// в строку
console.log(typeof(String(null)));  // string(null)
console.log("qw" + 5); // вернет строку "qw5"
// в число
console.log(typeof(Number("4")));   // вернет число
console.log(typeof(+"5"));  // number, унарный плюс
console.log(typeof(parseInt('15px', 10))); // number

let answer = +prompt("hello?", "");  // +prompt -- всегда число

//false
//0
// "" - пустая строка( " " - строка с пробелом, не пустая)
//null
//undefined
//NaN - не матем операция
let switcher = null;

if(switcher){       // не выпонится
    console.log("Working..");
}
switcher = 1;
if(switcher){      // выполнится
    console.log("Working..");
}   
// boolean
console.log(typeof(Boolean("4"))); 
console.log(typeof(!!("4"))); 
