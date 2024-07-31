function shouldServeDrinks(age, onBreak) {
  // return onBreak === true ? false : age >= 18 ? true : false;
  return age >= 18 && !onBreak;
}

console.log(shouldServeDrinks(17, true)); //➞ false
console.log(shouldServeDrinks(19, false)); //➞ true
console.log(shouldServeDrinks(30, true)); // ➞ false
