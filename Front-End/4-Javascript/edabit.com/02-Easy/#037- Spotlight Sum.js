function spotlightSum(n) {
  let result = 0;

  // line befor number
  for (let i = n - 11; i <= n - 9; i++) {
    result += i;
  }

  // line that involved number
  for (let i = n - 1; i <= n + 1; i++) {
    result += i;
  }

  // line after number
  for (let i = n + 9; i <= n + 11; i++) {
    result += i;
  }

  return result;
}

console.log(spotlightSum(19)); //  ➞ 171
console.log(spotlightSum(48)); //  ➞ 432
console.log(spotlightSum(88)); // ➞ 792
console.log(spotlightSum(29)); // ➞ 261
