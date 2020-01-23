// Searching for all the elements

const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider_prev');
const nextButton = document.querySelector('.slider_next');

let width = 800;
let currentSlide = 0;
let dirChange = 'next';

const showButtons = () => {
    currentSlide === 0 ? prevButton.style.display = 'none' : prevButton.style.display = 'block';
    currentSlide === slides.length - 1 ? nextButton.style.display = 'none' : nextButton.style.display = 'block';
};

showButtons();

const changeSlide = (dir) => {
    if (dir === "next") {
        currentSlide < slides.length - 1 ? currentSlide++ : dirChange = "prev"
    } else if (dir === "prev") {
        currentSlide > 0 ? currentSlide-- : dirChange = "next";
    } else {
        // если там не next, и не prev, то считаем, что dir равна номеру слайда, который надо показать
        currentSlide = dir;
    }

    let l = -currentSlide * width + "px";
    sliderList.style.left = l;
    showButtons();
};

prevButton.onclick = function () {
    changeSlide('prev');
};

nextButton.onclick = function () {
    changeSlide('next');
};


