
document.addEventListener('DOMContentLoaded', () => {

    const seatContainer = document.querySelector('.seatContainer'); //좌석 관련 태그

    const movie = document.getElementById('movie'); // 선택할 영화
    let moviePrice = Number(movie.value); // 영화가격 

    let count = document.querySelector('#count'); // 인원수
    let costs = document.querySelector('#costs'); // 가격

    let curPos = 0; // 이미지 순서
    const slides = document.querySelectorAll("#container > img");
    const images = document.querySelector("#container"); // 이미지 관련 태그
    const prevBtn = document.querySelector("#prev"); // 버튼 prev 관련 태그
    const nextBtn = document.querySelector("#next"); // 버튼 next 관련 태그
    

    // 이미지 분리 기능
    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[n].style.display = "block";
    }
    // 이전 이미지로 슬라이드
    function prev() {
        if (curPos > 0){
            curPos -= 1;
        }
        else {
            curPos = slides.length - 1;
        }
        showSlide(curPos);
    }
    // 다음 이미지로 슬라이드
    function next() {
        if (curPos < slides.length - 1) {
            curPos += 1;
        }
        else {
            curPos = 0;
        }
        showSlide(curPos);
    }
    // 버튼 실행 함수
    function init(){
        showSlide(curPos);
        prevBtn.addEventListener("click", prev);
        nextBtn.addEventListener("click", next);
    }

    init();
    
    // 좌석 선택에 따른 최종 정보 값 변경

    function countSeatPrice() {
        const selectedSeatCount = document.querySelectorAll('.selectedSeat').length;

        count.textContent = selectedSeatCount;
        costs.textContent = selectedSeatCount * moviePrice;

    }


    // 좌석 클릭시 값 변경

    seatContainer.addEventListener('click', (e) => {

        if (e.target.className === 'seat') {
            e.target.className = 'selectedSeat';
        } else if (e.target.className === 'selectedSeat') {
            e.target.className = 'seat';
        }

        countSeatPrice();
    })

    // 영화 클릭시 값 변경

    movie.addEventListener('change', (e) => {

        moviePrice = Number(e.target.value);

        countSeatPrice()

    })
})