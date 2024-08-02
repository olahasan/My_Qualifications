function addsNum(n) {
  return (N) => n + N;
}

let adds1 = addsNum(1);
console.log(adds1(3)); //➞ 4
console.log(adds1(5.7)); // ➞ 6.7

let adds10 = addsNum(10);
console.log(adds10(44)); // ➞ 54
console.log(adds10(20)); // ➞ 30
