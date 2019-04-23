let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) 
            && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b; 
            }else{
                --i;
            }
        };
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay); 
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("произошла ошибка")
        } 
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с Вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOutExspenses: function(){
        for(let i = 0; i<3; i++){
            let a = prompt("Введите не обязательную статью расходов в этом месяце", '');
            appData.optionalExpenses[i] = a; 
            console.log( appData.optionalExpenses);
            }
        },
    
    chooseIncome: function(){

        let items = prompt("Что принесет доплнительный доход? (Перечислите через запятую)", "");
        
        if( typeof(items) != "string" || items == "" || typeof(items) == null){
            items = prompt("Что принесет доплнительный доход? (Перечислите через запятую)", "");
        }else{
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        };

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}



//при помощи цикла for in
// for (let key in object){ 
//     console.log( key + object[key] );
// }



