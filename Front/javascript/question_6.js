start_button = document.querySelector('.start-btn')
pause_button = document.querySelector('.pause-btn')
reset_button = document.querySelector('.reset-btn')

let min, sec;
let timer;
let count = 0;

//////////////////////////////////////////////////////////////////////////////
start_button.onclick = function () {
    count+=1;
    if (start_button.value == "START" & count==1){
        min = document.querySelector("#startMin").value; 
        sec = document.querySelector("#startSec").value;
        timer = setInterval(countTimer, 1000);
        return True;
    }
    if(start_button.value=="RESUME"){
        start_button.value = "START";
        count = 1;
        timer = setInterval(countTimer, 1000);
        return True;
    }
    if(start_button.value == "START" & count==2){
        alert("이미 타이머가 동작중입니다.");
        return false;
    }
}

countTimer = function () {
    document.querySelector("#display").innerText =
        min + "분" + sec + "초 남았습니다.";
    if (sec != 0) {
        sec--;
    }
    else {
        if (min != 0) {
        min--;
        sec = 59;
        }
    if (min <= 0){
        document.getElementById("pause_message").innerText = '2초 뒤 새로고침됩니다';
        setTimeout(function(){
            location.reload();
        },2000)
    }
    }
}
//////////////////////////////////////////////////////////////////////////////
pause_button.onclick = function(){
    start_button.value = "RESUME"
    clearInterval(timer)
}
//////////////////////////////////////////////////////////////////////////////
reset_button.onclick = function resetTimer() { // 리셋 버튼 연결
    setTimeout(function(){
        clearTimer(timer, "리셋 종료");
    },2000)
}
//////////////////////////////////////////////////////////////////////////////
clearTimer=function (t, text) {
    clearInterval(t);
    document.getElementById("display").innerText = text;
    document.getElementById("startMin").value = "";
    document.getElementById("startSec").value = "";
}