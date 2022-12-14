function calc(){
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력해주세요.");
    var age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML =age;
}