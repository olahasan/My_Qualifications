function coneVolume(h, r) {
  //first way
  /*
  const PI = 3.141592653589793;
  return r === 0? 0: parseFloat(((1 / 3) * PI * Math.pow(r, 2) * h).toFixed(2));
  */
   //second way
  return r === 0 ? 0: Math.round((1 / 3) * Math.PI * Math.pow(r, 2) * h * 100) / 100;
}

//another way
/*
function coneVolume(height, radius) {
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  return Math.round(volume * 100) / 100; // Rounded to the nearest hundredth
}
*/

console.log(coneVolume(3, 2)); //  ➞ 12.57
console.log(coneVolume(15, 6)); //  ➞ 565.49
console.log(coneVolume(18, 0)); // ➞ 0

