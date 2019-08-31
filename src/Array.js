import Rect from "./Rect";

class Arr {
  constructor(canvas, startx, starty, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = Math.floor(Math.random() * 16 + 50);
    this.min = 2;
    this.max = 30;
    this.startx = startx;
    this.starty = starty;
    this.width = width;
    this.height = height;
    this.arr = [];
    this.rect = [];
    this.highlightred = [];
    this.highlightgreen = [];
    this.finished = [];
    for (let i = 0; i < this.size; i++) {
      this.arr.push(
        Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
      );

      this.rect.push(
        new Rect(
          this.ctx,
          this.startx + (this.width / this.size) * i,
          this.starty + (this.height / this.max) * (this.max - this.arr[i]),
          this.width / this.size,
          (this.height / this.max) * this.arr[i]
        )
      );
    }
  }

  getItem(index) {
    return this.arr[index];
  }

  getSize() {
    return this.size;
  }

  setSize(s) {
    this.size = s;
    this.clearAll();

    for (let i = 0; i < this.size; i++) {
      this.arr.push(
        Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
      );

      this.rect.push(
        new Rect(
          this.ctx,
          this.startx + (this.width / this.size) * i,
          this.starty + (this.height / this.max) * (this.max - this.arr[i]),
          this.width / this.size,
          (this.height / this.max) * this.arr[i]
        )
      );
    }
  }

  clearAll() {
    this.arr = [];
    this.rect = [];
    this.finished = [];
    this.highlightgreen = [];
    this.highlightred = [];
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.rect.forEach((e, i) => {
      if (this.highlightred.includes(i)) {
        e.draw(0);
      } else if (this.highlightgreen.includes(i)) {
        e.draw(1);
      } else if (this.finished.includes(i)) {
        e.draw(2);
      } else {
        e.draw(-1);
      }
    });
  }

  update(val, index) {
    this.arr[index] = val;
    this.rect[index].update(
      this.starty + (this.height / this.max) * (this.max - val),
      (this.height / this.max) * val
    );
  }

  highLightRed(i) {
    this.highlightred.push(i);
  }

  unHighLightRed(i) {
    this.highlightred = this.highlightred.filter(v => i != v);
  }

  highLightGreen(i) {
    this.highlightgreen.push(i);
  }

  unHighLightGreen(i) {
    this.highlightgreen = this.highlightgreen.filter(v => i != v);
  }

  finishedIndex(i) {
    this.finished.push(i);
  }
}

export default Arr;
