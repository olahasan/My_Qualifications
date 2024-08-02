function numLayers(n) {
  return `Paper folded ${n === 1 ? "once" : n + " times"} is ${0.5 * Math.pow(2, n)}mm (equal to ${(0.5 * Math.pow(2, n)) / 1000}m)`;
}

console.log(numLayers(1)); // Paper folded once is 1mm (equal to 0.001m)
console.log(numLayers(4)); // Paper folded 4 times is 8mm (equal to 0.008m)
console.log(numLayers(21)); // Paper folded 21 times is 1048576mm (equal to 1048.576m)
