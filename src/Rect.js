class Rect {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(i) {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    if (i == 0) {
      this.ctx.fillStyle = "red";
    } else if (i == 1) {
      this.ctx.fillStyle = "green";
    } else if (i == 2) {
      this.ctx.fillStyle = "pink";
    } else {
      this.ctx.fillStyle = "black";
    }
    this.ctx.fill();
  }

  update(y, height) {
    this.y = y;
    this.height = height;
  }
}

export default Rect;
