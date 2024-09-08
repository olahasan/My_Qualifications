function calculateFuel(n) {
  return n * 10 < 100 ? 100 : n * 10;
}

console.log(calculateFuel(15)); // 150
console.log(calculateFuel(23.5)); // 235
console.log(calculateFuel(3)); // 100
console.log(calculateFuel(9)); // 100
console.log(calculateFuel(10)); // 100
