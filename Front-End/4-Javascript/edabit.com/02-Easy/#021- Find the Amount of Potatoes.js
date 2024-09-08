function potatoes(str) {
  const matches = str.match(/potato/gi);
  return matches ? matches.length : 0;
}

// Example usage:
console.log(potatoes("potato")); // Output: 1
console.log(potatoes("potatopotato")); // Output: 2
console.log(potatoes("potatoapple")); // Output: 1
