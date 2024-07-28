function remainder(x, y) {
	 if (typeof x !== "number" || typeof y !== "number") {
    return "Sorry, should enter a number";
  } else {
    return x % y;
  }
}
