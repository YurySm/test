
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
console.log(0 || "" || 2 || undefined || true || falsе );
