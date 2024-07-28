function calcAge(age) {
  if (typeof age !== "number") {
    return "Sorry, should enter a number";
  } else {
    return age * 365;
  }
}
