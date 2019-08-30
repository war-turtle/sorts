import Rect from "./Rect";

class Arr {
  constructor(canvas, startx, starty, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = Math.floor(Math.random() * 16 + 15);
    this.min = 2;
    this.max = 30;
    this.startx = startx;
    this.starty = starty;
    this.width = width;
    this.height = height;
    this.arr = [];
    this.rect = [];
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

  draw(j) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.rect.forEach((e, i) => {
      if (j == i) {
        e.draw(j);
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
}

export default Arr;
