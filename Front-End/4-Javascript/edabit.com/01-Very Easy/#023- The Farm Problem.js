function animals(chickens, cows, pigs) {
	 if (typeof chickens !== "number" || typeof cows !== "number" || typeof pigs !== "number") {
    return "Sorry, should enter a number";
  } else {
    return ((chickens * 2) + (cows * 4) + (pigs * 4));
  }
}
