function derivative(b, m) {
  return b * Math.pow(m, b - 1);
}

console.log(derivative(1, 4)); // ➞ 1
console.log(derivative(3, -2)); //➞ 12
console.log(derivative(4, -3)); //  ➞ -108
