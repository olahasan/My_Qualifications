function equation(s) {
  try {
    return eval(s);
  } catch (error) {
    return error.message;
  }
}

console.log(equation("1+1")); // ➞ 2
console.log(equation("7*4-2")); // ➞ 26
console.log(equation("1+1+1+1+1")); // ➞ 5
console.log(equation("2+a")); // ➞ Invalid or unexpected token
