function divisible(num) {
  return num % 100 === 0;
}

console.log(divisible(1)); //  ➞ false
console.log(divisible(1000)); //  ➞ true
console.log(divisible(100)); // ➞ true
console.log(divisible(10)); // ➞ false
