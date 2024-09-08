function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

console.log(concatName("First", "Last")); // ➞ "Last, First"
console.log(concatName("John", "Doe")); //➞ ➞ "Doe, John"
console.log(concatName("Mary", "Jane")); //➞ "Jane, Mary"

