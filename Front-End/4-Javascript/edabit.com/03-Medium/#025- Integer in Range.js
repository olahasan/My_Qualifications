function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) ? n > lower && n < upper : false;
  // return !Number.isInteger(n) ? false : n > lower && n < upper;
}

console.log(intWithinBounds(3, 1, 9)); //➞ true
console.log(intWithinBounds(6, 1, 6)); //➞ false
console.log(intWithinBounds(4.5, 3, 8)); //➞ false
