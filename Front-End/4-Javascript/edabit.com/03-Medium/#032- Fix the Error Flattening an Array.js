function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}

console.log(flatten([[1, 2],[3, 4]])); // Expected: [1, 2, 3, 4]
console.log(flatten([["a", "b"],["c", "d"]])); // Expected: ["a", "b", "c", "d"]
console.log(flatten([[true, false],[false, false]])); // Expected: [true, false, false, false]
