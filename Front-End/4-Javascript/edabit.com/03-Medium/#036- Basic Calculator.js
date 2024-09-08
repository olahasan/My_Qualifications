function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return "Can't divide by 0!";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(2, "+", 2)); // ➞ 4
console.log(calculator(2, "*", 2)); // ➞ 4
console.log(calculator(4, "/", 2)); // ➞ 2
console.log(calculator(14, "/", 2)); // ➞ 7
console.log(calculator(14, "/", 0)); // ➞ "Can't divide by 0!"
console.log(calculator(14, "%", 2)); // ➞ "Invalid operator"
