import {enable} from "core-js/internals/internal-metadata";
import 'animate.css';
import updateGradient from "../js/gradient";
import './styles.css';
import Cursor from '../js/cursor';
import Popup from '../js/popup';
import Swiper from 'swiper/bundle';

//import ClickableElement from '../js/clickableElement';

//модалка
const popup = new Popup('.cookies-popup', '.cookies-popup__btn');
popup.setOpeningTimeout();
popup.setEventListeners();

//кастомный курсор
const cursor = new Cursor(document.querySelector('.round-cursor'));

//Русский язык активный по дефолту
const lang = document.querySelectorAll('.link_lang')[1];
lang.click();
lang.focus();
// button.on('enter', () => cursor.enter());
// button.on('leave', () => cursor.leave());

//const button = new ClickableElement(document.querySelector('.button'));
// document.querySelector('.link').addEventListener("mouseover", function () {
// //   document.querySelector('.round-cursor').style.display = 'none';

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
    let elementBottom = reveals[i].getBoundingClientRect().bottom;
    let elementVisible = 45;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

