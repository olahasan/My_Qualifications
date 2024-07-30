function frames(minutes, fps) {
  return minutes * (fps * 60);
}

console.log(frames(1, 1)); // 60
console.log(frames(10, 1)); // 600
console.log(frames(10, 25)); //15000
console.log(frames(1, 2)); // 120
