function makesTen(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}

console.log(makesTen(9, 10)); // true
console.log(makesTen(9, 9)); // false
console.log(makesTen(1, 9)); // true
