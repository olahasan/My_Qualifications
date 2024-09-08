function checkEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  } else {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
    }
    return true;
  }
}

console.log(checkEquals([1, 2], [1, 3])); // false
console.log(checkEquals([1, 2], [1, 2])); // true
console.log(checkEquals([4, 5, 6], [4, 5, 6])); // true
console.log(checkEquals([4, 7, 6], [4, 5, 6])); // false
console.log(checkEquals([4, 7, 6], [4, 6, 7])); // false
