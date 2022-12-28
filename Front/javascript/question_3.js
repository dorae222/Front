// setInterval, clearInterval, setTimeout, clearTimeout
// setInterval: 임의의 시간마다 함수를 실행
// clearInterval: 실행한 함수의 진행을 멈출 때 사용
// setTimeout: 일정시간을 지정하고, 그 시간이 지나면 함수를 한번만 실행
// clearTimeout: setTimeout 해제
/////------------------------------------------------------------
// setInterval(test,1000); // 1초마다 한번씩 실행 // test -함수

// function test(){
//     document.write("Hello <br>")
// }
/////------------------------------------------------------------
// i = 1;

// var inteval = setInterval(() => {
//     document.write(`${i} 번째의 Hello <br>`) // 작은 따옴표가 아니라 shift + ~ = ` != '
//     i +=1;
//     if (i==10){
//         clearInterval(inteval)
//     }
// },1000)

// setTimeout(function(){
//     document.write("1초 후에 실행 된 Text입니다.")
// },1000)

/////------------------------------------------------------------
timer = setTimeout(function () {
    document.write("5초 후에 실행된 Text 입니다.")
}, 5000);

setInterval(function() {
    document.write("1초간 실행중~~ <br>")
},1000);

clearTimeout(timer)
/////------------------------------------------------------------
//setInterval 제거하고 진행

timer = setTimeout(function () {
    document.write("5초 후에 실행된 Text 입니다.")
}, 5000);

// setInterval(function() {
//     document.write("1초간 실행중~~ <br>")
// },1000);

//clearTimeout(timer)