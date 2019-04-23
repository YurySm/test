function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}
learnJS(JS,function(){
    console.log("Я прошел 3-й урок");
});