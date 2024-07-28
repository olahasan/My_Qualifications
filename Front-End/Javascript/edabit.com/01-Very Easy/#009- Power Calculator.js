function circuitPower(voltage, current) {
   if (typeof voltage !== "number" || typeof current !== "number") {
    return "Sorry, should enter a number";
  } else {
    return voltage * current;
  }
}
