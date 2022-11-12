import './styles.css';
import Cursor from '../js/cursor';
// import ClickableElement from './js/clickableElement';
//

const circle = document.querySelector('.round-cursor')
const cursor = new Cursor(document.querySelector('.round-cursor'));
//const button = new ClickableElement(document.querySelector('.magnet'));
//
//
// button.on('enter', () => cursor.enter());
// button.on('leave', () => cursor.leave());
const lang = document.querySelectorAll('.link_lang')[1];
//Русский язык активный по дефолту
lang.click();
lang.focus();

const links = document.querySelectorAll(".wavy-link");

links.forEach(link => {
  link.addEventListener("mouseleave", () => {

    circle.style.display = "block";
  });

  link.addEventListener("mouseover", () => {

    circle.style.display = "none";
  });

});

