function comp(str1, str2) {
  return str1.length === str2.length;
}

console.log(comp("AB", "CD")); // true
console.log(comp("ABC", "DE")); // false
console.log(comp("hello", "edabit")); // false
