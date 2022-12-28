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