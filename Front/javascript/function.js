// function addNumber(){
//     num1 = prompt("첫 번째 숫자 입력");
//     num2 = prompt("두 번째 숫자 입력");
//     // alert(num1+num2)
//     alert(Number(num1)+parseInt(num2));
// }

// addNumber()

var num1 = parseInt(prompt("첫번째 숫자를 입력"));
var num2 = Number(prompt("두번째 숫자를 입력"));
var result = addNumber(num1,num2);
alert(result);

function addNumber(a,b){
    var sum = a+b;
    return sum;
}