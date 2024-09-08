function count(n) {
  return n < 0 ? (-n).toString().length : n.toString().length;
  // return Math.abs(n).toString().length;
}

console.log(count(318)); //➞ 3
console.log(count(-92563)); //➞ 5
console.log(count(4666)); //➞ 4
console.log(count(-314890)); //➞ 6
console.log(count(654321)); //➞ 6
console.log(count(638476)); //➞ 6
