import Arr from "./Array";
import bubbleSort from "./bubble";
import insertionSort from "../insertion";

import * as dat from "dat.gui";
const gui = new dat.GUI();

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startx = window.innerWidth * 0.2;
let starty = window.innerHeight * 0.1;
let width = window.innerWidth * 0.6;
let height = window.innerHeight * 0.9;
// window.addEventListener("resize", () => {
//   startx = window.innerWidth * 0.2;
//   starty = window.innerHeight * 0.1;
//   width = window.innerWidth * 0.6;
//   height = window.innerHeight * 0.9;
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   arr = new Arr(canvas, startx, starty, width, height);
// });

let arr = new Arr(canvas, startx, starty, width, height);
arr.draw();
const obj = {
  draw: () => {
    arr.draw();
  },
  bubbleSort: () => {
    bubbleSort(arr);
  },
  insertionSort: () => {
    insertionSort(arr);
  }
};

const sizeController = gui.add(arr, "size", 0, 100).step(1);
sizeController.onChange(v => {
  arr.setSize(v);
});

gui.add(obj, "draw");
gui.add(obj, "bubbleSort");
gui.add(obj, "insertionSort");
