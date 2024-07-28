function points(twoPointers, threePointers) {
   if (typeof twoPointers !== "number" || typeof threePointers !== "number") {
    return "Sorry, should enter a number";
  } else {
   return (twoPointers * 2) + (threePointers * 3);
  }
}
