var now = new Date(); // 현재
var first = new Date("2022-11-30"); //강의 시작 날짜
var day_now = now.getTime() - first.getTime(); // 만난 밀리초만큼 차이
// 1일 = 24시간 x 60분 x 60초 x 1000밀리초 --> (1000*60*60*24)
var to_day = Math.round(day_now/(1000*60*60*24)); // 일수로 변환
document.querySelector("#accent span").innerHTML = to_day + "일";
var tag_days = document.getElementsByTagName("input"); // input 태그 요소 4개를 배열 형태로 저장
var button = document.getElementsByTagName("button"); // 버튼 태그 가져옴
button[0].onclick = function() { // 0번째 요소인것을 알 수 있음
    for(let i = 0; tag_days.length; i++) {
        fun_input = tag_days[i].value; // 100 , 500
        day_calc(fun_input, i); // 0, 1
    }
}
function day_calc(days, num) { // days = 100, num = 0 / 500, 1
    var someday = new Date(first.getTime() + days*24*60*60*1000);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var day = someday.getDate();
    document.querySelectorAll(".item-date")[num].innerHTML = `${year}년 ${month}월 ${day}일`;
}