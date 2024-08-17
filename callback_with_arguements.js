function sum(x,y,mycallback){
    let result = x+y;
    mycallback(result);
}
function printResult(text){
    console.log(text);
}

sum(2,5,printResult);