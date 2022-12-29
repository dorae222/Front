
document.addEventListener('DOMContentLoaded', () => {

    const seatContainer = document.querySelector('.seatContainer');

    const movie = document.getElementById('movie'); // 선택할 영화
    let moviePrice = Number(movie.value); // 영화과격 

    let count = document.querySelector('#count'); // 인원수
    let costs = document.querySelector('#costs'); // 가격

    let curPos = 0;
    const slides = document.querySelectorAll("#container > img");
    const prevBtn = document.querySelector("#prev")
    const nextBtn = document.querySelector("#next")
    const images = document.querySelector("#container")

    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[n].style.display = "block";
    }

    function prev() {
        if (curPos > 0){
            curPos -= 1;
        }
        else {
            curPos = slides.length - 1;
        }
        showSlide(curPos);
    }

    function next() {
        if (curPos < slides.length - 1) {
            curPos += 1;
        }
        else {
            curPos = 0;
        }
        showSlide(curPos);
    }

    function init(){
        showSlide(curPos);
        prevBtn.addEventListener("click", prev);
        nextBtn.addEventListener("click", next);
    }

    init();
    
    // 선택한 좌석수 텍스트 변경해주기

    function countSeatPrice() {
        const selectedSeatCount = document.querySelectorAll('.selectedSeat').length;

        count.textContent = selectedSeatCount;
        costs.textContent = selectedSeatCount * moviePrice;

    }


    //좌석 클릭했을때

    seatContainer.addEventListener('click', (e) => {

        if (e.target.className === 'seat') {
            e.target.className = 'selectedSeat';
        } else if (e.target.className === 'selectedSeat') {
            e.target.className = 'seat';
        }

        countSeatPrice();
    })

    // 영화 변경할때

    movie.addEventListener('change', (e) => {

        moviePrice = Number(e.target.value);

        countSeatPrice()

    })




})