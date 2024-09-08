function toArray(obj) {
  // return Object.entries(obj);
  return Array.from(Object.entries(obj));
}

console.log(toArray({ a: 1, b: 2 })); //➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 })); //➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})); //➞ []
