function binary(decimal) {
  // Base case: If the decimal is 0, return "0"
  if (decimal === 0) {
    return "0";
  }

  let result = "";
  let currentBit = 1;

  // Iterate until the current bit's value is greater than the decimal
  while (currentBit <= decimal) {
    // Check if the current bit is set in the decimal
    if (decimal >= currentBit) {
      result = "1" + result;
      decimal -= currentBit;
    } else {
      result = "0" + result;
    }
    currentBit *= 2;
  }

  return result;
}

////////////////////////////////////////////

function binary(decimal) {
  return decimal.toString(2);
}
