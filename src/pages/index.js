console.log("test");
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
  // modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
});
