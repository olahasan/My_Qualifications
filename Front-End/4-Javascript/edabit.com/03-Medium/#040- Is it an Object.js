function isObject(value) {
  return typeof value === "object" && value !== null;
}

console.log(isObject(function add(x, y) {return x + y;})); // true
console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g"))); // true
console.log(isObject(null)); // false
console.log(isObject("")); // false
