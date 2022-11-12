import './pages/styles.css';
import Cursor from './js/cursor';
import ClickableElement from './js/clickableElement';

const cursor = new Cursor(document.querySelector('.round-cursor'));
const button = new ClickableElement(document.querySelector('.button'));
const lang = document.querySelectorAll('.link_lang')[1];

// button.on('enter', () => cursor.enter());
// button.on('leave', () => cursor.leave());

//Русский язык активный по дефолту
lang.click();
lang.focus();


// document.querySelector('.link').addEventListener("mouseover", function () {
// //   document.querySelector('.round-cursor').style.display = 'none';
