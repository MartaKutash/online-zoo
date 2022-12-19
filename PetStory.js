let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header_list');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

/*const overLay = document.querySelector("#overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overLay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overLay.style.display = "none";
})*/

const overLay1 = document.querySelector("#overlay1");

document.querySelector("#show-modal-btn1").addEventListener("click", () => {
    overLay1.style.display = "block";
})

document.querySelector("#close-modal-btn1").addEventListener("click", () => {
    overLay1.style.display = "none";
})


const overLay2 = document.querySelector("#overlay2");

document.querySelector("#show-modal-btn2").addEventListener("click", () => {
    overLay2.style.display = "block";
})

document.querySelector("#close-modal-btn2").addEventListener("click", () => {
    overLay2.style.display = "none";
})

const overLay3 = document.querySelector("#overlay3");

document.querySelector("#show-modal-btn3").addEventListener("click", () => {
    overLay3.style.display = "block";
})

document.querySelector("#close-modal-btn3").addEventListener("click", () => {
    overLay3.style.display = "none";
})

const overLay4 = document.querySelector("#overlay4");

document.querySelector("#show-modal-btn4").addEventListener("click", () => {
    overLay4.style.display = "block";
})

document.querySelector("#close-modal-btn4").addEventListener("click", () => {
    overLay4.style.display = "none";
})

const overLay5 = document.querySelector("#overlay5");

document.querySelector("#show-modal-btn5").addEventListener("click", () => {
    overLay5.style.display = "block";
})

document.querySelector("#close-modal-btn5").addEventListener("click", () => {
    overLay5.style.display = "none";
})

const overLay6 = document.querySelector("#overlay6");

document.querySelector("#show-modal-btn6").addEventListener("click", () => {
    overLay6.style.display = "block";
})

document.querySelector("#close-modal-btn6").addEventListener("click", () => {
    overLay6.style.display = "none";
})

let slider = document.querySelector('input[type="range"]');
let prev_slide = 0;
slider.addEventListener("input", function(e) {
    const carousel = document.getElementById("carousel");
    let items = document.querySelectorAll(".item");
    let item_width = items[0].offsetWidth;
    console.log(item_width);
    let gap = (carousel.scrollWidth - item_width * items.length) / (items.length-1);
    console.log(gap);
    console.log(carousel.scrollWidth);
    console.log(items.length);
    console.log(carousel);
    let currentSlide = e.target.value
    console.log(currentSlide);
    if (prev_slide < currentSlide) {
        carousel.scrollBy(item_width + gap, 0);
    } else {
        carousel.scrollBy(-(item_width + gap), 0);
    }
    prev_slide = currentSlide;
})



