function acceptIntoMovie(age, isSupervised) {
  return isSupervised === true ? true : age >= 15 ? true : false;
}

console.log(acceptIntoMovie(14, true)); // ➞ true
console.log(acceptIntoMovie(14, false)); // ➞ false
console.log(acceptIntoMovie(16, false)); //  ➞ true

console.log(acceptIntoMovie(3, false)); //  ➞ false
console.log(acceptIntoMovie(3, true)); //  ➞ true

console.log(acceptIntoMovie(15, false)); //  ➞ true
console.log(acceptIntoMovie(15, true)); //  ➞ true
console.log(acceptIntoMovie(16, true)); //  ➞ true
