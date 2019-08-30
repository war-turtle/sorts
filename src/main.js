import Arr from "./Array";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startx = window.innerWidth * 0.2;
let starty = window.innerHeight * 0.1;
let width = window.innerWidth * 0.6;
let height = window.innerHeight * 0.9;
window.addEventListener("resize", () => {
  startx = window.innerWidth * 0.2;
  starty = window.innerHeight * 0.1;
  width = window.innerWidth * 0.6;
  height = window.innerHeight * 0.9;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  arr = new Arr(canvas, startx, starty, width, height);
  arr.draw();
});

let arr = new Arr(canvas, startx, starty, width, height);
arr.draw();

let i = 0;
const outerloop = () => {
  let j = 1;
  const innerloop = () => {
    if (arr.getItem(j - 1) > arr.getItem(j)) {
      const temp = arr.getItem(j - 1);
      arr.update(arr.getItem(j), j - 1);
      arr.update(temp, j);
      arr.draw(j);
    }
    j++;
    if (j < arr.getSize() - i) {
      setTimeout(innerloop, 500);
    } else {
      i++;
      if (i < arr.getSize() - 1) {
        setTimeout(outerloop, 500);
      }
    }
  };
  innerloop();
};
outerloop();
