import Arr from "./Array";
import bubbleSort from "./bubble";
import insertionSort from "../insertion";

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

// bubbleSort(arr);
insertionSort(arr);
