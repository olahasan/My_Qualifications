function nextEdge(side1, side2) {
	 if (typeof side1 !== "number" || typeof side2 !== "number") {
    return "Sorry, should enter a number";
  } else {
    return (side1 + side2)-1;
  }
}
