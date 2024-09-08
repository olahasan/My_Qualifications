function findPerimeter(length, width) {
	 if (typeof length !== "number" || typeof width !== "number") {
    return "Sorry, should enter a number";
  } else {
    return (length + width)*2;
  }
}
