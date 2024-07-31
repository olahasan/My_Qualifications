function countVowels(str) {
  // return str.match(/a|i|o|u|e/gi).length;
  return str.match(/[aeiou]/gi).length;
}

console.log(countVowels("Celebration")); //  ➞ 5
console.log(countVowels("Palm")); //  ➞ 1
console.log(countVowels("Prediction")); // ➞ 4
