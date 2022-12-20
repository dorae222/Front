// 사진에 마우스를 올렸을 때 남자 사진으로 변경
// 마우스를 올리는 이벤트 -> mouseover
// ../pictures/boy.png

// 사진에서 마우스를 밖으로 빼면, 여자 사진으로 변경
// 마우스를 밖으로 빼는 이벤트 -> mouseout

var p_tag = document.querySelector('p');
p_tag[0].style.backgroundColor="blue";
p_tag[0].style.fontSize = "15px";
p_tag[0].style.color = "white";
//CSS -> background-color로 사용하지만,
//JS -> backgroundColor로 사용(하이폰 제거, 붙이고, 두번째를 대문자로)
// EX> font-size --> fontSize로 사용

var picture = document.getElementById("pic");
var girl_path = picture.getAttribute("src"); // "../pictures/girl.png"
var boy_path = "../pictures/boy.png"
// 1
picture.onmouseover = boy_func;
function boy_func () {
    picture.setAttribute("src", boy_path);
}
picture.onmouseout = girl_func;
function girl_func () {
    picture.setAttribute("src", girl_path);
}
// 2
picture.onmouseover = function () {
    picture.setAttribute("src", boy_path);
}
picture.onmouseout = function () {
    picture.setAttribute("src", girl_path);
}
// 3
picture.addEventListener("mouseover", boy_func);
picture.addEventListener("mouseout", girl_func);
function boy_func () {
    picture.setAttribute("src", boy_path);
}
function girl_func () {
    picture.setAttribute("src", girl_path);
}