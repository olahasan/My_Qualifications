function howManySeconds(hours) {
	 if (typeof hours !== "number") {
    return "Sorry, should enter a number";
  } else {
    return hours * 60 * 60;
  }
}
