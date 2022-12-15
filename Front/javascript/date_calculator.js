var now = new Date(); // 현재
var first = new Date("2022-11-30"); //강의 시작날짜
var day_now = now.getTime() - first.getTime(); // 만난 밀리초만큼 차이
// 1일 = 24시간 * 60분 * 60초 * 1000밀리초 (1000*60*60*24)
var to_day = Math.round(day_now/(1000*60*60*24)); // 만난 일수로 변환
document.querySelector("#accent span").innerHTML = to_day + "일";


function celebration(i){
    var day_i = new Date("2022-11-30");
    day_i.setDate(day_i.getDate()+i);
    var year = day_i.getFullYear();
    var month = day_i.getMonth()+1;
    var day = day_i.getDate();
    document.querySelector(`#date${i}`).innerHTML = year+'년'+month+'월'+day+'일';
}

var arr = [100,200,365,500]

for (var i = 0; i < arr.length; i++){
    celebration(arr[i])
}