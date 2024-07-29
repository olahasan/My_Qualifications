function matchHouses(step) {
  if (typeof step != "number") {
    return "sorry, this is not a number";
  } else {
    if (step === 0) {
      return 0;
    } else {
      if (step === 1) {
        return 6;
      } else {
        return (step - 1) * 5 + 6;
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////
//or use ternary operator
function matchHouses(step) {
  return typeof step != "number" ? "sorry, this is not a number": 
    step === 0 ? 0: 
    step === 1 ? 6: 
    (step - 1) * 5 + 6;
}
