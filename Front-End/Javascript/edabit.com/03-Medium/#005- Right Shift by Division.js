function shiftToRight(x, y) {
  if (y < 0) {
    throw new Error("Second parameter must be non-negative.");
  }
  return Math.floor(x / Math.pow(2, y));
}

console.log(shiftToRight(80, 3)); // ➞ 10
console.log(shiftToRight(-24, 2)); // ➞ -6
console.log(shiftToRight(-5, 1)); // ➞ -3
console.log(shiftToRight(4666, 6)); // ➞ 72
console.log(shiftToRight(3777, 6)); // ➞ 59
console.log(shiftToRight(-512, 10)); //➞ -1
