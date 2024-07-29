function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr1Max = Math.max(...arr1);

  let arr2Min = Math.min(...arr2);
  let arr2Max = Math.max(...arr2);

  return arr2Min < arr1Min && arr2Max > arr1Max;
}
