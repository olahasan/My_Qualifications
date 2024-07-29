function whichIsLarger(f, g) {
/*
  const fResult = f();
  const gResult = g();

  if (fResult > gResult) {
    return "f";
  } else if (gResult > fResult) {
    return "g";
  } else {
    return "neither";
  }
*/
  return f() === g() ? "neither" : f() > g() ? "f" : "g";
}

///////
//whichIsLarger(() => 5, () => 10) ➞ "g"
