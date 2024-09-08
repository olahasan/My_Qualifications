function makePlusFunction(baseNum) {
  return function (newArgument) {
    return baseNum + newArgument;
  };
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2)); // Output: 7
console.log(plusFive(-8)); // Output: -3
