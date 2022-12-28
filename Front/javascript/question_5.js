var ans = Math.floor((Math.random() * 100)+1)       // 정답
var inputNum = document.querySelector("#try")       // 입력한 값
var ok = document.querySelectorAll("input[type = button]")[0]       // 확인
var reset = document.querySelectorAll("input[type = reset]")[0]     // 다시
var count = 0       // 시도한 횟수
ok.onclick = function () {
    if ((inputNum.value > 100) || (inputNum.value < 0)){
        document.querySelector("#number").innerHTML = "0 ~ 100 사이의 숫자를 쓰세요."
        return;
    }
    count = count + 1
    document.querySelector("#number").innerHTML = "방금 입력한 숫자 : " + inputNum.value
    document.getElementById("display").style.color = "red";
    if (inputNum.value > ans) {
        document.querySelector("#display").innerHTML = "DOWN"
    }
    else if (inputNum.value < ans) {
        document.querySelector("#display").innerHTML = "UP"
    }
    else {document.querySelector("#display").innerHTML = "맞혔습니다 !"}
    document.querySelector("#counter").innerHTML = "시도횟수 : " + count
}
reset.onclick = function () {
    // count = 0
    // document.querySelector("#number").innerHTML = ""
    // document.querySelector("#counter").innerHTML = ""
    // document.querySelector("#display").innerHTML = ""
    // ans = Math.floor((Math.random() * 100)+1)
    window.location.reload()
}