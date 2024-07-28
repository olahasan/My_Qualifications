function lessThan100(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry, should enter a number";
  } else {
    return (a + b < 100);
  }
}
