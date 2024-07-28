function addition(num) {
  if (typeof num !== "number") {
    return "Sorry, should enter a number";
  } else {
    return ++num;
  }
}
