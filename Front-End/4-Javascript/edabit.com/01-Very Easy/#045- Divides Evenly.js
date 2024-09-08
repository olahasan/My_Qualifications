function dividesEvenly(a, b) {
  return a % b == 0;
}

dividesEvenly(85, 4);
console.log(dividesEvenly(98, 7)); //➞ true // 98/7 = 14
console.log(dividesEvenly(85, 4)); //➞ false// 85/4 = 21.25
