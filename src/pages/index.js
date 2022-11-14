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

//градиент фона
let colors = [[0, 26, 255],
  [194, 0, 198],
  [255, 94, 44,],
  [44, 255, 52],
  [44, 179, 255]];

let step = 0;
let colorIndices = [0, 1, 2, 3];
let gradientSpeed = .08;

function updateGradient() {
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c1_0 = colors[colorIndices[2]];
  let c1_1 = colors[colorIndices[3]];

  let istep = 1 - step;
  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = "#" + ((r1 << 16) | (g1 << 8) | b1).toString(16);


  const color3 = "#000";

  let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = "#" + ((r2 << 16) | (g2 << 8) | b2).toString(16);

  document.querySelector(".gradient__circle_left").style.background = `-webkit-radial-gradient(center, ${color1} 0%, ${color3} 65%)`
  document.querySelector(".gradient__circle_right").style.background = `-webkit-radial-gradient(center, ${color2} 0%, ${color3} 55%)`
  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //выбрать два новых цвета, отличных от текущего
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient, 600);
