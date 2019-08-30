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
    if (i != -1) {
      this.ctx.fillStyle = "#342";
    } else {
      this.ctx.fillStyle = "#000";
    }
    this.ctx.fill();
  }

  update(y, height) {
    this.y = y;
    this.height = height;
  }
}

export default Rect;
