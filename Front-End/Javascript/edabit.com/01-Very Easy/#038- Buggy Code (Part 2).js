function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  }
}

console.log(maxNum(3, 7)); // 7
console.log(maxNum(-1, 0)); // 0
console.log(maxNum(1000, 400)); // 1000
console.log(maxNum(10, 40)); // 40
