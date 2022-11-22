import {enable} from "core-js/internals/internal-metadata";
import 'animate.css';
import updateGradient from "../js/gradient";
import './styles.css';
import Cursor from '../js/cursor';
import Popup from '../js/popup';
import Swiper from 'swiper/bundle';

//модалка
const popup = new Popup('.cookies-popup', '.cookies-popup__btn');
const link = document.querySelectorAll('.link');
const cursor2 = document.querySelector('.round-cursor');
popup.setOpeningTimeout();
popup.setEventListeners();

link.forEach((item) => {
  item.addEventListener('mouseenter', e => {
    cursor2.classList.add('hovered')
  })
  item.addEventListener('mouseout', e => {
    cursor2.classList.remove('hovered')
  })
})

document.querySelector('.cookies-popup__btn').removeEventListener('touchend', popup.setEventListeners);

//кастомный курсор
const cursor = new Cursor(document.querySelector('.round-cursor'));

//градиент фона
setInterval(updateGradient, 700);

//слайдер
new Swiper('.swiper', {
  lazyImageLoad: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-nav-right',
    prevEl: '.swiper-nav-left',
  },
});

let reveals = document.querySelectorAll(".reveal");

function reveal() {

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 45;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



