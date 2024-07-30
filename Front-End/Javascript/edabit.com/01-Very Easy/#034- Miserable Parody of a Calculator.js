function calculator(str) {
  try {
    return eval(str);
  } catch (error) {
    return "Error: Invalid expression.";
  }
}

console.log(calculator("23+4")); // 27
console.log(calculator("45-15")); // 30
console.log(calculator("13+2-5*2")); //5
console.log(calculator("49/7*2-3")); // 11
