var number = prompt("숫자를 입력하세요.");
var result = 1;

for (var i=1; i<=number; i++){
    result *= i;
}
document.write(`${number}!=${result}`)