// 라디오 버튼, 체크 상자에 필요한 요소를 선택하고, 수강신청하기 버튼을 눌렀을 때 선택한 요소
// 들의 "텍스트(라벨태그의 텍스트 값)"를 alert로 출력.
// 예) 신청과목 - "회화"를 선택 / 메일링 - "해외 단신", "5분 회화"를 선택하고, 수강신청하기
// 버튼을 누르면, "라디오가 선택한 값은 : 회화" 알림창이 출력
// 그리고 "체크 상자가 선택한 값들은 : 해외 단신, 5분 회화" 알림창이 이어서 출력
// 힌트_1 : 라디오 버튼과 체크 상자의 값이 선택된것을 확인하는 메소드(checked)
// 힌트_2 : 체크 상자의 경우 배열을 고려, DOM 요소의 부모노드 접근 고려(<input>의 상위 요소는 <label>)
button_tag = document.querySelectorAll("button");
button_tag[0].onclick = radio_check_events;
function radio_check_events() {
    var radios = document.getElementsByName("subject");
    // var radios = document.testForm.subject;
    // var radios = document.querySelectorAll("input[type=radio]");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            alert("라디오가 선택한 값은 : " + radios[i].parentNode.innerText);
        }
    }
    // 1번
    var check1 = document.testForm.mailing1;
    var check2 = document.testForm.mailing2;
    var check3 = document.testForm.mailing3;
    var checks = [check1, check2, check3];
    var text_array = [];
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            text_array.push(checks[i].parentNode.innerText);
        }
    }
    alert("체크 상자가 선택한 값들은 : " + text_array);
    // alert("체크 상자가 선택한 값들은 : " + text_array.join(", "));
    // 2번
    // var checks = document.getElementsByTagName("input");
    // var checks_box = [];
    // var text_array = [];
    // for (let i = 0; i < checks.length; i++) {
    //     if (checks[i].type == "checkbox") {
    //         checks_box.push(checks[i]);
    //     }
    // }
    // for (let i = 0; i < checks_box.length; i++) {
    //     if (checks_box[i].checked == true) {
    //         text_array.push(checks_box[i].parentNode.innerText);
    //     }
    // }
    // alert("체크 상자가 선택한 값들은 : " + text_array.join(", "));
    // 3번
    // var checks = document.querySelectorAll("input[type=checkbox]");
    // var text_array = [];
    // for (let i = 0; i < checks.length; i++) {
    //     if (checks[i].checked == true) {
    //         text_array.push(checks[i].parentNode.innerText);
    //     }
    // }
    // alert("체크 상자가 선택한 값들은 : " + text_array.join(", "));
}