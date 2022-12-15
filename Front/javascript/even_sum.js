var input = prompt("숫자를 입력하세요.");
var sum_even =0;
var sum_odd =0;


for (var i =1; i <=input; i++){
    if (i%2==1){
        continue;
    }
    sum_even+=i;
    document.write("짝수의 합은"+sum_even+"<br>");

    if (i%2==0){
        continue;
    }
    sum_odd+=i;
    document.write("홀수의 합은"+sum_odd+"<br>");
}