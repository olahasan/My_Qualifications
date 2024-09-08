function convert(hours, minutes) {
	 if (typeof hours !== "number" || typeof minutes !== "number") {
    return "Sorry, should enter a number";
  } else {
    return ((hours * 60 * 60) + (minutes * 60));
  }
}
