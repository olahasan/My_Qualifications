function charCount(myChar, str) {
  let regex = new RegExp(myChar, "g"); //not recommended way in regex
  let all = str.match(regex);
  return all ? all.length : 0;
}

////////////////////////////////////
// other way
function charCount(myChar, str) {
  let coynter = 0;
  for (var i = 0; i < str.length; i++) {
    str[i] === myChar ? ++coynter : coynter;
  }
  return coynter;
}
console.log(charCount("a", "edabit")); //➞ 1
console.log(charCount("c", "Chamber of secrets")); //➞ 1
console.log(charCount("b", "big fat bubble")); //➞ 4
