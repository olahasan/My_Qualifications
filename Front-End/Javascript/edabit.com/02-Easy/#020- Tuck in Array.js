function tuckIn(arr1, arr2) {
  let halfArr1Lenth = arr1.length / 2;

  let firstHalfArr1 = arr1.slice(0, halfArr1Lenth);
  let secondHalfArr1 = arr1.slice(halfArr1Lenth, arr1.length);

  let newArr = [...firstHalfArr1, ...arr2, ...secondHalfArr1];

  return newArr;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(tuckIn([15, 150], [45, 75, 35])); //[15, 45, 75, 35, 150]

console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); //[[1, 2], [3, 4], [5, 6]]
  
