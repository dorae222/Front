// var myVar =100;
// document.write("함수밖의 myVar는"+myVar+"<br>")
// function test(){
//     // var myVar = 50;
//     document.write("함수내의 myVar는"+myVar+"<br>")
// }
// test()

// 함수 scope의 가짐 -> test()가 종료되고, myVar = 50이 사라진 것임.
// 전역변수와 지역변수의 차이 -> 일반적인 프로그래밍언어(C, JAVA, Python)과 동일한 개념
// Python에서는 전역변수를 사용하기 위해서 global 코드문 사용
// JS의 경우, 함수 내부의 변수 지우고 실행하여 비교해보기
// 즉, Var 예약어는 함수내에서 사용하지 않으면, 전역변수로 사용이 가능.

//////////////////////////////////////////////////////////////////////////////////////
// // let, const의 스코프 영역 확인
// for (var i =0; i<3; i++){
//     document.write(i+"<br>"); //0,1,2
// }
// document.write(i+"<br><hr>"); //3(for문의 i++까지는 동작함)

// for (let j =0; j<3; j++){
//     document.write(j+"<br>"); //0,1,2 --> 3까지는 됐지만
// }
// document.write(j+"<br><hr>"); //해당 부분에서는 3이 출력되지 않음.
// //함수 안에서만 동작함 -> "let"
//////////////////////////////////////////////////////////////////////////////////////
let x =1;
const y =2;

if (x===1){ //자료형까지 조건을 검색 let과 const는 블록 레벨의 스코프이다.
    let x=2;
    const y=5;

    document.write("IF문 내의 let x는"+ x + "<br>")
    document.write("IF문 내의 const y는"+ y + "<br>")
}

document.write("IF문 밖의 let x는"+ x + "<br>")
document.write("IF문 밖의 const y는"+ y + "<br>")

x=5;
document.write("재할당한 let x는"+ x + "<br>")
y=10;
document.write("재할당한 const y는"+ y + "<br>")