const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
  return {width: window.innerWidth, height: window.innerHeight};
};

// Gets the mouse position
const getCursorPos = e => {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
}

// Generate a random float.
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

export {
  map,
  lerp,
  calcWinsize,
  getCursorPos,
  distance,
  getRandomFloat
};

