var userNumber = prompt("숫자를 입력하세요.");
var displayArea = document.querySelector('#result');
if (userNumber != null) {
    if (userNumber > 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 양수입니다.";
    }
    else if (userNumber == 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 0 입니다.";	
    }
    else if (userNumber < 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 음수 입니다.";	
    }
    else if (typeof(userNumber) == "string") {
        displayArea.innerHTML = "입력하신건 숫자가 아닌 문자열 입니다.";
    }
    else {
        displayArea.innerHTML = "입력하신건 숫자가 아닌 공백 입니다.";
    }
}
else {
    alert("입력이 취소됐습니다.");
    displayArea.innerHTML = "숫자만 입력해주세요 ㅠㅠㅠㅠ";
}