function possibleBonus(a, b) {
  if (a >= b || b - a > 6) {
    return false;
  } else {
    return true;
  }
}

console.log(possibleBonus(3, 7)); //➞ true
console.log(possibleBonus(1, 9)); //➞ false
console.log(possibleBonus(5, 3)); //➞ false
