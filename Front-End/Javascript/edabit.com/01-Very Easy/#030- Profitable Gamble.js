function profitableGamble(prob, prize, pay) {
	  if (typeof prob !== "number" || typeof prize !== "number" || typeof pay !== "number") {
    return "Sorry, should enter a number";
  } else {
    return ((prob * prize) > pay);
  }
}
