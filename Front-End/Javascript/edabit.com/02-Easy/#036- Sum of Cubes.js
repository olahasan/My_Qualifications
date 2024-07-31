function sumOfCubes(nums) {
  if (nums.length === 0) return 0;
  let result = nums
    .map(function (ele) {
      return Math.pow(ele, 3);
    })
    .reduce(function (acc, current) {
      return acc + current;
    });
  return result;
}

console.log(sumOfCubes([1, 5, 9])); // ➞ 855  // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([])); // ➞ 0
console.log(sumOfCubes([2])); // ➞ 8
console.log(sumOfCubes([3, 4, 5])); // 216
