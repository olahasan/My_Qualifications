function millionsRounding(arr) {
  let result = [];
  for (let a of arr) {
    // console.log(Math.round(a[1] / 1000000) * 1000000);
    let newValue = Math.round(a[1] / 1000000) * 1000000;
    if (newValue < 500000) {
      newValue = 0;
    }
    result.push([a, newValue]);
  }
  return result;
}

console.log(
  millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572],
  ])
);
/*
[
  ["Nice", 1000000],
  ["Abu Dhabi", 1000000],
  ["Naples", 2000000],
  ["Vatican City", 0]
]
*/
