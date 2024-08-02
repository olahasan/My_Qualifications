class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  toString() {
    return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`;
  }
}


const rect = new Rectangle(1, 2, 3, 4);
console.log(rect.toString()); // Output: [x=1, y=2, width=3, height=4]
