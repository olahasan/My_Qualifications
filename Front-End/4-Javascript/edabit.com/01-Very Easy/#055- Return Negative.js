function returnNegative(n) {
  return n === 0 ? 0 : n < 0 ? n : -n;
}

console.log(returnNegative(4)); // ➞ -4
console.log(returnNegative(15)); // ➞ -15
console.log(returnNegative(-4)); //  ➞ -4
console.log(returnNegative(0)); //  ➞ 0
