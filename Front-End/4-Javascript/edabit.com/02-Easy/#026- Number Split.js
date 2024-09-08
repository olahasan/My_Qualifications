function numberSplit(n) {
  let firstHalf = Math.floor(n / 2);
  let secondHalf = n - firstHalf;
  return [firstHalf, secondHalf];
}

console.log(numberSplit(4));  //➞ [2, 2]
console.log(numberSplit(10)); //➞ [5, 5]
console.log(numberSplit(11)); //➞ [5, 6]
console.log(numberSplit(-9)); //➞ [-5, -4]
console.log(numberSplit(13)); //➞ [6, 7]
