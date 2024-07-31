function drop(arr, val = 1) {
  return arr.slice(val);
}

console.log(drop([1, 2, 3], 1)); // ➞ [2, 3]
console.log(drop([1, 2, 3], 2)); // ➞ [3]
console.log(drop([1, 2, 3], 5)); //  ➞ []
console.log(drop([1, 2, 3], 0)); // ➞ [1, 2, 3]
