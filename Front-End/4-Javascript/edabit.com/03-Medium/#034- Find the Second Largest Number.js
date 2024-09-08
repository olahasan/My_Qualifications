function secondLargest(arr) {
  return arr.sort((current, next) => current - next)[arr.length - 2];
}

console.log(secondLargest([10, 40, 30, 20, 50])); // ➞ 40
console.log(secondLargest([25, 143, 89, 13, 105])); // ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10])); // ➞ 23
