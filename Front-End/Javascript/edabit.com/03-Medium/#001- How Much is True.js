function countTrue(arr) {
  return arr.length === 0 ? 0
    : arr.filter(function (ele) {
        return ele === true;
      }).length;
}

console.log(countTrue([true, false, false, true, false])); //➞ 2
console.log(countTrue([false, false, false, false])); //➞ 0
console.log(countTrue([])); // ➞ 0
console.log(countTrue([true, false, true, false, true])); //➞ 3
