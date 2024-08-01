class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle extends Rectangle {
  constructor(radius) {
    // PI = 3.14159;
    super(); // Call the parent class constructor
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let circy = new Circle(11);
console.log(circy.getArea()); // 380.132711084365

let q = new Circle(4.44);
console.log(q.getPerimeter()); // 27.897342763877365
