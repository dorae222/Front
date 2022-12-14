var heading = document.querySelector("#heading"); // var은 변수를 선언하고 할당하는 예약어
// 정수, 실수, 문자열, ..., 배열(파이썬의 리스트)
var color_array = ["black","red","blue","green","brown"]

heading.onclick = function(){ //이벤트 처리 -> 함수로 구현
    color_index = Math.floor(Math.random() *  color_array.length); //난수값을 반올림
    //color_index = Math.random() *  color_array.length; // 0~5 사이의 값 적용
    //color_index = Math.random() //0~0.999까지 랜덤한 난수를 생성해 줌.
    heading.style.color = color_array[color_index]; // 태그의 속성
}