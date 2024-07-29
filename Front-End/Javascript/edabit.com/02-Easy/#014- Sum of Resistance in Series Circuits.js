function seriesResistance(arr) {
  let t = arr.reduce(function (acc, current, index, arr) {
    return acc + current;
  });
  return t + (t <= 1 ? " ohm" : " ohms");
}
