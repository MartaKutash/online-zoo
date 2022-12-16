let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header_list');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const overLay = document.querySelector("#overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overLay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overLay.style.display = "none";
})

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