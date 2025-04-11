const slides = document.querySelectorAll(".slides img");
const captions = document.querySelectorAll(".caption");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    showSlide(slideIndex);
slides[slideIndex].classList.add("displaySlide");
}
function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length -1;
    }
slides.forEach(slide => {
    slide.classList.remove("displaySlide");
});
captions.forEach(caption => {
    caption.classList.remove("displaySlide");
})
slides[slideIndex].classList.add("displaySlide");
captions[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
slideIndex --;
showSlide(slideIndex);
}
function nextSlide() {
slideIndex++;
showSlide(slideIndex);
}