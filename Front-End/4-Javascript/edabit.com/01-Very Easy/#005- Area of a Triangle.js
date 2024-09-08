function triArea(base, height) {
	if (typeof base !== "number" || typeof height !== "number") {
    return "Sorry, should enter a number";
  } else {
    return (base * height)/2;
  }
}
