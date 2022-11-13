import {gsap} from 'gsap';
import {lerp, getCursorPos} from './utils';

// отслеживаем положение мышки
let cursor = {x: 0, y: 0};
window.addEventListener('mousemove', e => cursor = getCursorPos(e));

export default class Cursor {
  constructor(el) {
    this.DOM = {el: el};
    this.DOM.el.style.opacity = '0';
    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: {previous: 0, current: 0, amt: 0.2},
      ty: {previous: 0, current: 0, amt: 0.2},
      scale: {previous: 1, current: 1, amt: 0.2},
      opacity: {previous: 1, current: 1, amt: 0.2}
    };
//
    this.onCursorMove = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current = cursor.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = cursor.y - this.bounds.height / 2;
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onCursorMove);

    };
    window.addEventListener('mousemove', this.onCursorMove);
  }

  render() {
    this.renderedStyles['tx'].current = cursor.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = cursor.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
    this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;

    requestAnimationFrame(() => this.render());
  }
}

