function highestDigit(number) {
  let arrOffNumbers = number.toString().split(""); // array of string

  let fin = Math.max(
    ...arrOffNumbers.map(function (ele) {
      return +ele; // array of number
    })
  );

  return fin;

  /*
   return Math.max(
    ...arrOffNumbers.map(function (ele) {
      return +ele; // array of number
    })
  );
  */
}

console.log(highestDigit(379)); //  ➞ 9
console.log(highestDigit(2)); //  ➞ 2
console.log(highestDigit(377401)); // ➞ 7
console.log(highestDigit(377481)); // ➞ 8
