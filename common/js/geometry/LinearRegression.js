class LinearRegression {
  /**
   * Constructor
   *
   * @param {Point} p1
   * @param {Point} p2
   */
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.m = (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
    this.b = this.p1.y - this.m * this.p1.x;
  }

  getX(y) {
    return (y - this.b) / this.m;
  }

  getY(x) {
    return this.m * x + this.b;
  }
}
