// 로직
// 작은 사진들을 누르면 --> 이벤트 필요
// 선택된 <img> 태그의 src 요소(getAttribute)가 상단의 큰 사진 쪽으로 변경(setAttribute)

var big_pic = document.querySelector('#cup'); // 큰 사진 요소 가져오기
// var small_pics = document.querySelectorAll('.small'); // 작은 사진들 요소 가져오기
var small_pics = document.getElementsByClassName('small');
for (let i = 0; i < small_pics.length; i++) {
    small_pics[i].onclick = function () {
        small_path = small_pics[i].getAttribute("src"); // this 도 가능
        big_pic.setAttribute("src", small_path);
    }
}