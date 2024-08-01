function compact(arr) {
  return arr.filter(Boolean);
}

console.log(compact([0, 1, false, 2, "", 3])); //=> [1, 2, 3]
