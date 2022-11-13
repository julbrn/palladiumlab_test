console.log("test");

import './styles.css';
import Cursor from '../js/cursor';
import Popup from '../js/popup';
//import ClickableElement from '../js/clickableElement';

//модалка
const popup = new Popup('.cookies-popup', '.cookies-popup__btn');
popup.setOpeningTimeout();
popup.setEventListeners();
const cursor = new Cursor(document.querySelector('.round-cursor'));
//const button = new ClickableElement(document.querySelector('.button'));
const lang = document.querySelectorAll('.link_lang')[1];

//Русский язык активный по дефолту
lang.click();
lang.focus();
// button.on('enter', () => cursor.enter());
// button.on('leave', () => cursor.leave());


// document.querySelector('.link').addEventListener("mouseover", function () {
// //   document.querySelector('.round-cursor').style.display = 'none';
