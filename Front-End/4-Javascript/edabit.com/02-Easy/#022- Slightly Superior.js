function isFirstSuperior(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return true;
      }
    }
  }
  return false;
}
console.log(isFirstSuperior([1, 2, 3], [1, 2, 3])); //➞ false
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])); //➞ true
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); //➞ true
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])); //➞ true
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); //➞ false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); //➞ false
