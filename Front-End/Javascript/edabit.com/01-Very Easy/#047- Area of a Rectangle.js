function area(h, w) {
  return h <= 0 || w <= 0 ? -1 : h * w;
}

console.log(area(3, 4)); //➞ 12
console.log(area(10, 11)); //➞ 110
console.log(area(-1, 5)); //➞ -1
console.log(area(0, 2)); //➞ -1
