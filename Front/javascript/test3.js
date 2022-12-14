var number = prompt("숫자를 입력하세요.");

if (number%3==0){
    document.querySelector("#showResult").innerHTML = "입력한" + number + "는 3의 배수입니다."
}
else{
    document.querySelector("#showReuslt").innerHTML = `입력한 ${number}는 3의 배수가 아닙니다.`
}