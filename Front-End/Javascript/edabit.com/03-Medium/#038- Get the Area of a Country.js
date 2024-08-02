function areaOfCountry(name, area) {
  
  const totalWorldLandmass = 148_940_000;
  const percentage = (area / totalWorldLandmass) * 100;
  
  return `${name} is ${percentage.toFixed(2)}% of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242)); // Output: "Russia is 11.48% of the total world's landmass"
console.log(areaOfCountry("USA", 9372610)); // Output: "USA is 6.29% of the total world's landmass"
console.log(areaOfCountry("Iran", 1648195)); // Output: "Iran is 1.11% of the total world's landmass"
